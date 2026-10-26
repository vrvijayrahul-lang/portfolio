import React from 'react';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Eye,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Activity,
  Globe2
} from 'lucide-react';
import { getStoredAnalytics, getStoredInquiries, getStoredProjects } from '../../data/store';

export default function AdminAnalytics() {
  const analytics = getStoredAnalytics();
  const inquiries = getStoredInquiries();
  const projects = getStoredProjects();

  const unreadCount = inquiries.filter((i) => i.status === 'unread').length;
  const completedProjectsCount = projects.filter((p) => p.isCompleted).length;

  return (
    <div className="space-y-8">
      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Views */}
        <div className="double-bezel-card">
          <div className="double-bezel-inner p-6 bg-[#08080c] border border-white/[0.04]">
            <div className="flex items-center justify-between font-tech text-xs text-zinc-400 mb-3">
              <span>PORTFOLIO VISITS</span>
              <div className="w-8 h-8 rounded-lg bg-crimson-600/15 text-crimson-400 flex items-center justify-center">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="font-monument text-4xl text-white tracking-wide">
              {analytics.totalViews.toLocaleString()}
            </div>
            <div className="flex items-center gap-1.5 font-tech text-[11px] text-emerald-400 mt-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.4% this month</span>
            </div>
          </div>
        </div>

        {/* Unique Visitors */}
        <div className="double-bezel-card">
          <div className="double-bezel-inner p-6 bg-[#08080c] border border-white/[0.04]">
            <div className="flex items-center justify-between font-tech text-xs text-zinc-400 mb-3">
              <span>UNIQUE AUDIENCE</span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] text-zinc-300 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="font-monument text-4xl text-white tracking-wide">
              {analytics.uniqueVisitors.toLocaleString()}
            </div>
            <div className="font-tech text-[11px] text-zinc-400 mt-2">
              Global reach across 24 countries
            </div>
          </div>
        </div>

        {/* Inquiries */}
        <div className="double-bezel-card">
          <div className="double-bezel-inner p-6 bg-[#08080c] border border-white/[0.04]">
            <div className="flex items-center justify-between font-tech text-xs text-zinc-400 mb-3">
              <span>INBOX TRANSMISSIONS</span>
              <div className="w-8 h-8 rounded-lg bg-crimson-600/20 text-crimson-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>
            <div className="font-monument text-4xl text-white tracking-wide">
              {inquiries.length}
            </div>
            <div className="flex items-center gap-1.5 font-tech text-[11px] text-crimson-400 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
              <span>{unreadCount} unread inquiries</span>
            </div>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="double-bezel-card">
          <div className="double-bezel-inner p-6 bg-[#08080c] border border-white/[0.04]">
            <div className="flex items-center justify-between font-tech text-xs text-zinc-400 mb-3">
              <span>CONVERSION RATE</span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] text-zinc-300 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="font-monument text-4xl text-white tracking-wide">
              {analytics.conversionRate}
            </div>
            <div className="font-tech text-[11px] text-zinc-400 mt-2">
              Visitor-to-Inquiry average
            </div>
          </div>
        </div>

      </div>

      {/* Traffic Chart & Activity Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Weekly Engagement Sparkline Bars (col-span-8) */}
        <div className="lg:col-span-8 double-bezel-card">
          <div className="double-bezel-inner p-6 sm:p-7 bg-[#08080c] border border-white/[0.04] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] font-tech">
                <div>
                  <h3 className="font-monument text-xl text-white tracking-wide">
                    WEEKLY TRAFFIC & INQUIRY FREQUENCY
                  </h3>
                  <p className="text-[11px] text-zinc-400 uppercase mt-0.5">
                    ANALYTICS CYCLE: CURRENT WEEK
                  </p>
                </div>
                <span className="text-xs text-crimson-400 font-semibold">[7 DAYS]</span>
              </div>

              {/* Graphical Bar Representation */}
              <div className="grid grid-cols-7 gap-3 items-end h-48 pt-6 pb-2">
                {analytics.weeklyTraffic.map((item) => {
                  const maxViews = 2000;
                  const heightPercent = Math.min(100, Math.round((item.views / maxViews) * 100));

                  return (
                    <div key={item.day} className="flex flex-col items-center gap-2 group h-full justify-end">
                      <div className="font-tech text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.views}
                      </div>
                      <div className="w-full max-w-[42px] bg-white/[0.04] rounded-t-lg relative flex items-end overflow-hidden h-36">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full bg-gradient-to-t from-crimson-800 to-crimson-500 rounded-t-lg group-hover:from-crimson-600 group-hover:to-crimson-400 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                        />
                      </div>
                      <span className="font-tech text-xs text-zinc-400 group-hover:text-white transition-colors">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-tech text-[10px] text-zinc-400">
              <span>PEAK ENGAGEMENT: FRIDAY (1,650 VIEWS)</span>
              <span className="text-crimson-400 font-semibold">AVERAGE DWELL: 2M 42S</span>
            </div>
          </div>
        </div>

        {/* Project Engagement & Status Roster (col-span-4) */}
        <div className="lg:col-span-4 double-bezel-card">
          <div className="double-bezel-inner p-6 sm:p-7 bg-[#08080c] border border-white/[0.04] flex flex-col justify-between">
            <div>
              <h3 className="font-monument text-xl text-white tracking-wide pb-4 mb-4 border-b border-white/[0.06]">
                PROJECT REPOSITORY STATUS
              </h3>

              <div className="space-y-3 font-tech">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-300">Total Configured</span>
                  <span className="font-monument text-lg text-white">{projects.length}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-crimson-400">Live Client Work</span>
                  <span className="font-monument text-lg text-crimson-400">{completedProjectsCount}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Active Concepts</span>
                  <span className="font-monument text-lg text-zinc-400">{projects.length - completedProjectsCount}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <span className="font-tech text-[10px] uppercase text-zinc-400 block mb-2">
                  TOP VIEWED DELIVERABLE
                </span>
                <div className="font-monument text-lg text-white">
                  VSM EVENTS SHOWCASE
                </div>
                <div className="text-xs font-tech text-zinc-400 mt-1">
                  782 detail inspections • 99% satisfaction
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 font-tech text-[10px] text-zinc-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-crimson-400" />
              <span>CORE WEB VITALS: 100% HEALTHY</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
