import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ShieldCheck, Activity, LineChart, Coins, Info } from 'lucide-react';

interface Trade {
  id: number;
  pair: string;
  type: 'BUY' | 'SELL';
  openPrice: number;
  currentPrice: number;
  size: number;
  pnl: number;
}

const INITIAL_PAIRS = [
  { symbol: 'EUR/USD', price: 1.0845, spread: '0.2', change: '+0.18%', up: true },
  { symbol: 'GBP/USD', price: 1.2720, spread: '0.4', change: '+0.32%', up: true },
  { symbol: 'XAU/USD', price: 2345.80, spread: '1.2', change: '-0.45%', up: false },
  { symbol: 'BTC/USD', price: 68450.00, spread: '4.5', change: '+2.14%', up: true }
];

export default function TradingDashboard({ isHeroCompact = false }: { isHeroCompact?: boolean }) {
  const [pairs, setPairs] = useState(INITIAL_PAIRS);
  const [selectedPair, setSelectedPair] = useState(INITIAL_PAIRS[0]);
  const [openTrades, setOpenTrades] = useState<Trade[]>([]);
  const [lotSize, setLotSize] = useState<number>(0.1);
  const [isSimulating, setIsSimulating] = useState(true);
  const [totalPnl, setTotalPnl] = useState(0);
  const [chartData, setChartData] = useState<number[]>([42, 48, 45, 50, 48, 55, 52, 58, 54, 62, 59, 65, 61, 70, 68, 72]);

  // Tick generator
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      // Tick primary pairs
      setPairs(prev => {
        const next = prev.map(p => {
          const tick = (Math.random() - 0.495) * (p.symbol.includes('BTC') ? 120 : p.symbol === 'XAU/USD' ? 1.5 : 0.0004);
          const newPrice = Number((p.price + tick).toFixed(p.symbol.includes('BTC') ? 2 : p.symbol === 'XAU/USD' ? 2 : 5));
          const isUp = tick >= 0;
          return {
            ...p,
            price: newPrice,
            up: isUp,
            change: `${isUp ? '+' : ''}${(Math.random() * 2).toFixed(2)}%`
          };
        });
        
        // Update selected pair details
        const found = next.find(x => x.symbol === selectedPair.symbol);
        if (found) {
          setSelectedPair(found);
          // Append new point to the chart
          setChartData(cData => {
            const copy = [...cData.slice(1)];
            // Simulated bounce
            const baseline = cData[cData.length - 1];
            const change = (Math.random() - 0.49) * 8;
            const newPoint = Math.max(15, Math.min(95, baseline + change));
            copy.push(newPoint);
            return copy;
          });
        }
        return next;
      });

      // Update active trades real-time P&L
      setOpenTrades(trades => {
        if (trades.length === 0) return trades;
        let pnlSum = 0;
        const updated = trades.map(t => {
          const currentPairInfo = pairs.find(p => p.symbol === t.pair);
          if (!currentPairInfo) return t;
          const currentPrice = currentPairInfo.price;
          const delta = currentPrice - t.openPrice;
          const multiplier = t.pair.includes('BTC') ? 10 : t.pair.includes('XAU') ? 100 : 100000;
          const pnl = Number((t.type === 'BUY' ? delta * t.size * multiplier : -delta * t.size * multiplier).toFixed(2));
          pnlSum += pnl;
          return { ...t, currentPrice, pnl };
        });
        setTotalPnl(Number(pnlSum.toFixed(2)));
        return updated;
      });

    }, 1200);

    return () => clearInterval(interval);
  }, [isSimulating, selectedPair.symbol, pairs]);

  const handleOrder = (type: 'BUY' | 'SELL') => {
    const newTrade: Trade = {
      id: Date.now(),
      pair: selectedPair.symbol,
      type,
      openPrice: selectedPair.price,
      currentPrice: selectedPair.price,
      size: lotSize,
      pnl: 0
    };
    setOpenTrades(prev => [newTrade, ...prev]);
  };

  const handleClosePosition = (id: number) => {
    setOpenTrades(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div id="trading-dashboard" className="bg-[#FAF9F9] rounded-2xl p-4 sm:p-6 border border-red-500/10 shadow-sm relative overflow-hidden">
      {/* Decorative pulse background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Header bar */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 border-b border-red-500/10 pb-4 sm:pb-5 mb-4 sm:mb-5">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto text-center sm:text-left">
          <div className="p-2.5 bg-red-600/10 rounded-xl border border-red-500/15 text-primary-red shrink-0">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2">
              <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">Institutional Execution Simulator</h3>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-600/10 text-primary-red border border-red-500/15 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                LIVE PRICE FEED
              </span>
            </div>
            <p className="text-xs text-slate-600">Simulate market order executions and real-time margin calculations.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 self-stretch md:self-auto bg-white p-1 rounded-xl border border-red-500/10 font-mono text-[11px]">
          <button 
            type="button"
            onClick={() => setIsSimulating(!isSimulating)}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer w-full md:w-auto font-bold ${isSimulating ? 'bg-red-600/10 text-primary-red border border-red-500/15' : 'text-slate-500 hover:text-slate-800'}`}
          >
            <Activity className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
            {isSimulating ? 'FEED ACTIVE' : 'FEED PAUSED'}
          </button>
        </div>
      </div>

      <div className={isHeroCompact ? "grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch" : "grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 items-stretch"}>
        {/* Left column: FX Pairs list */}
        <div className={isHeroCompact ? "col-span-12 md:col-span-4 flex flex-col justify-between space-y-4 h-full" : "col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-between space-y-4 h-full"}>
          <div className="space-y-3 w-full">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">Market Watch</span>
            <div className={isHeroCompact ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5"}>
              {pairs.map((p) => {
                const isActive = p.symbol === selectedPair.symbol;
                return (
                  <button
                    key={p.symbol}
                    onClick={() => setSelectedPair(p)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer w-full ${
                      isActive 
                        ? 'bg-white border-primary-red/40 shadow-sm' 
                        : 'bg-white border-red-500/5 hover:border-red-500/15 hover:bg-[#FAF9F9]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-display font-bold text-sm text-slate-900">{p.symbol}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${p.up ? 'bg-red-500/10 text-primary-red' : 'bg-red-500/5 text-primary-red'}`}>
                        {p.change}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-1.5">
                      <span className="font-mono text-base font-extrabold tracking-tight text-slate-950">{p.price}</span>
                      <span className="text-[10px] text-slate-500 font-mono">Spread: {p.spread}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-red-500/10 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-primary-red shrink-0" />
              <span className="font-bold text-slate-800">Capital Risk Monitor</span>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-left">
              <div className="p-2.5 bg-[#FAF9F9] rounded-lg border border-red-500/10 flex flex-col justify-between">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Leverage Max</span>
                <span className="text-xs font-extrabold text-slate-950 shrink-0 mt-1">1:100 Premium</span>
              </div>
              <div className="p-2.5 bg-[#FAF9F9] rounded-lg border border-red-500/10 flex flex-col justify-between">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Req Margin</span>
                <span className="text-xs font-extrabold text-slate-950 shrink-0 mt-1">1.0% SEC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center column: Live Trading Chart */}
        <div className={isHeroCompact ? "col-span-12 md:col-span-8 flex flex-col justify-between space-y-4 h-full" : "col-span-12 md:col-span-8 lg:col-span-6 flex flex-col justify-between space-y-4 h-full"}>
          <div className="flex justify-between items-center bg-red-500/5 p-3 rounded-xl border border-red-500/10 gap-2">
            <div>
              <span className="text-[10px] sm:text-xs text-slate-500 font-mono uppercase tracking-wider block">Asset Selected</span>
              <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-950 leading-tight">{selectedPair.symbol}</h4>
            </div>
            <div className="text-right">
              <span className="text-[10px] sm:text-xs text-slate-500 font-mono block">Trading Price</span>
              <div className="text-lg sm:text-xl font-mono font-bold text-primary-red tracking-wider leading-none mt-0.5">
                {selectedPair.price}
              </div>
            </div>
          </div>

          {/* Render Vector Graph Chart */}
          <div className="h-[140px] xs:h-44 sm:h-56 bg-white rounded-xl border border-red-500/10 p-2.5 sm:p-4 relative flex flex-col justify-between overflow-hidden shadow-sm">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none opacity-25">
              <div className="border-b border-red-500/5 w-full" />
              <div className="border-b border-red-500/5 w-full" />
              <div className="border-b border-red-500/5 w-full" />
              <div className="border-b border-red-500/5 w-full" />
            </div>

            {/* Price tags */}
            <div className="absolute right-2 top-2 bottom-3 flex flex-col justify-between text-[7.5px] xs:text-[9px] md:text-[10px] font-mono text-slate-500 text-right pointer-events-none z-10 select-none">
              <span>H: {(selectedPair.price * 1.002).toFixed(selectedPair.symbol.includes('BTC') ? 1 : 4)}</span>
              <span>M: {selectedPair.price}</span>
              <span>L: {(selectedPair.price * 0.998).toFixed(selectedPair.symbol.includes('BTC') ? 1 : 4)}</span>
            </div>

            {/* Sparkline canvas */}
            <div className="w-full h-full relative mt-3 sm:mt-4">
              <svg className="w-full h-20 xs:h-24 sm:h-36" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Gradient area under line */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E31E24" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E31E24" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d={`M 0 100 ${chartData.map((val, idx) => `L ${(idx / (chartData.length - 1)) * 100} ${100 - val}`).join(' ')} L 100 100 Z`}
                  fill="url(#chartGradient)"
                />
                <path
                  d={chartData.map((val, idx) => `${idx === 0 ? 'M' : 'L'} ${(idx / (chartData.length - 1)) * 100} ${100 - val}`).join(' ')}
                  fill="none"
                  stroke="#E31E24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Glowing live point */}
                <circle
                  cx="100"
                  cy={100 - chartData[chartData.length - 1]}
                  r="3.5"
                  fill="#E31E24"
                  className="animate-ping"
                />
                <circle
                  cx="100"
                  cy={100 - chartData[chartData.length - 1]}
                  r="2.5"
                  fill="#ffffff"
                  stroke="#E31E24"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[7.5px] xs:text-[9.5px] sm:text-[10.5px] font-mono text-slate-500 border-t border-red-500/10 pt-2 gap-2 mt-1">
              <span className="flex items-center gap-1 min-w-0 truncate">
                <LineChart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 shrink-0" /> 
                <span className="truncate text-[7px] xs:text-[9px] sm:text-[10px] font-bold text-slate-600">Candlestick Vector Flow</span>
              </span>
              <span className="shrink-0 text-[7px] xs:text-[9px] sm:text-[10px] text-slate-500">60s interval sampling</span>
            </div>
          </div>

          {/* Interactive Buy/Sell Buttons */}
          <div className="space-y-3 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-500/10 pb-2.5 sm:border-0 sm:pb-0">
              <label htmlFor="lot" className="text-xs text-slate-500 font-mono text-left block sm:inline font-bold">Lot Size Selection:</label>
              <div className="flex gap-1.5 flex-wrap">
                {[0.01, 0.1, 1.0, 5.0].map((v) => (
                  <button 
                    key={v}
                    onClick={() => setLotSize(v)}
                    className={`px-2.5 py-1 sm:py-0.5 rounded text-[10px] sm:text-xs font-mono font-bold border cursor-pointer ${lotSize === v ? 'bg-primary-red border-red-500 text-white shadow-sm' : 'bg-white border-red-500/10 text-slate-600 hover:text-slate-900 hover:bg-red-500/5'}`}
                  >
                    {v.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 font-display">
              <button
                type="button"
                onClick={() => handleOrder('BUY')}
                className="bg-white border-2 border-primary-red text-primary-red hover:bg-red-500/5 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-extrabold text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base transition-all shadow-sm flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform shrink-0 text-primary-red" />
                <span>BUY <span className="hidden sm:inline">(Instant)</span></span>
              </button>
              <button
                type="button"
                onClick={() => handleOrder('SELL')}
                className="bg-primary-red border-2 border-primary-red hover:bg-red-700 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-extrabold text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base transition-all shadow-sm flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer"
              >
                <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform shrink-0 text-white" />
                <span>SELL <span className="hidden sm:inline">(Instant)</span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Execution list & statistics */}
        <div className={isHeroCompact ? "col-span-12 flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:space-y-0" : "col-span-12 md:col-span-12 lg:col-span-3 flex flex-col sm:grid sm:grid-cols-3 lg:flex lg:flex-col lg:justify-between gap-4 sm:space-y-0 lg:space-y-4 h-full"}>
          <div className="bg-white p-4 rounded-xl border border-red-500/10 h-full flex flex-col justify-between shadow-sm">
            <div className="text-left animate-none">
              <span className="text-xs text-slate-500 font-mono block mb-1">Simulated Net Equity PNL</span>
              <div className={`text-2xl font-mono font-extrabold ${totalPnl >= 0 ? 'text-slate-950' : 'text-primary-red'}`}>
                {totalPnl >= 0 ? '+' : ''}${totalPnl.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-2 text-left">
              Active open orders: {openTrades.length}
            </div>
          </div>

          <div className={`min-h-[140px] max-h-[220px] bg-white rounded-xl border border-red-500/10 p-3.5 flex flex-col ${openTrades.length > 0 ? 'overflow-y-auto' : 'overflow-hidden'} shadow-sm`}>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-red-500/10 pb-1.5 mb-2.5 shrink-0">
              <span>Open Positions</span>
              <span>P&L USD</span>
            </div>
            {openTrades.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-2">
                <Coins className="w-5 h-5 text-red-500/30 mb-1" />
                <span className="text-xs text-slate-550 font-mono font-bold">No active simulator orders.</span>
                <span className="text-[9px] text-slate-500 mt-0.5">Click BUY or SELL to trade.</span>
              </div>
            ) : (
              <div className="space-y-2">
                {openTrades.map((t) => (
                  <div key={t.id} className="flex items-center justify-between text-xs font-mono p-2 bg-[#FAF9F9] rounded-lg border border-red-500/10">
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] px-1 py-0.5 rounded font-extrabold ${t.type === 'BUY' ? 'bg-red-500/10 text-primary-red' : 'bg-red-500/10 text-primary-red'}`}>
                          {t.type}
                        </span>
                        <span className="text-slate-900 font-extrabold">{t.pair}</span>
                      </div>
                      <span className="text-[9px] text-slate-500 block">S:{t.size.toFixed(2)} @ {t.openPrice}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${t.pnl >= 0 ? 'text-slate-800' : 'text-primary-red'}`}>
                        {t.pnl >= 0 ? '+' : ''}{t.pnl}
                      </span>
                      <button
                        onClick={() => handleClosePosition(t.id)}
                        className="text-[9px] bg-red-600/10 text-primary-red hover:bg-primary-red hover:text-white px-1.5 py-0.5 rounded cursor-pointer transition-all border border-red-500/10 font-bold"
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-3.5 bg-red-600/5 rounded-xl border border-red-500/10 flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-600 leading-normal">
              These charts are part of METRO Educational & Trading Academy's trading terminal system where students clear active certification phases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
