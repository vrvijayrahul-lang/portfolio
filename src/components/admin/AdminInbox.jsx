import React, { useState } from 'react';
import {
  Mail,
  Trash2,
  CheckCircle,
  Archive,
  ExternalLink,
  Search,
  Download,
  MessageSquare,
  ArrowUpRight,
  Phone,
  Eye,
  X,
  AlertCircle
} from 'lucide-react';
import {
  getStoredInquiries,
  markInquiryStatus,
  deleteInquiry,
  saveStoredInquiries
} from '../../data/store';

export default function AdminInbox() {
  const [inquiries, setInquiries] = useState(getStoredInquiries());
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const refreshInquiries = () => {
    setInquiries(getStoredInquiries());
  };

  const handleStatusChange = (id, newStatus) => {
    markInquiryStatus(id, newStatus);
    refreshInquiries();
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this inquiry from the inbox?')) {
      deleteInquiry(id);
      refreshInquiries();
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `srahul-inquiries-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filtered = inquiries.filter((inq) => {
    if (filter === 'unread' && inq.status !== 'unread') return false;
    if (filter === 'read' && inq.status !== 'read') return false;
    if (filter === 'archived' && inq.status !== 'archived') return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        inq.name.toLowerCase().includes(q) ||
        inq.email.toLowerCase().includes(q) ||
        inq.service.toLowerCase().includes(q) ||
        inq.message.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <h3 className="font-monument text-2xl text-white tracking-wide">
            CLIENT INQUIRIES & TRANSMISSIONS
          </h3>
          <p className="font-tech text-xs text-zinc-400 uppercase">
            {inquiries.length} TOTAL INCOMING LEADS RECORDED
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleExportJSON}
            className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-tech text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-crimson-400" />
            <span>EXPORT JSON</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search inquiries by client, email, or keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-500 text-xs font-tech focus:outline-none focus:border-crimson-500"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 font-tech text-xs bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
          {['all', 'unread', 'read', 'archived'].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all ${
                filter === s
                  ? 'bg-crimson-600 text-white font-semibold shadow-glow-crimson'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`double-bezel-card group transition-all duration-300 ${
              item.status === 'unread' ? 'border-crimson-600/40' : ''
            }`}
          >
            <div className="double-bezel-inner p-5 sm:p-6 bg-[#08080c] border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              {/* Client Info */}
              <div
                onClick={() => setSelectedInquiry(item)}
                className="flex-1 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                  {item.status === 'unread' && (
                    <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
                  )}
                  <span className="font-monument text-lg text-white group-hover:text-crimson-400 transition-colors">
                    {item.name}
                  </span>
                  <span className="font-tech text-xs text-zinc-400">
                    &lt;{item.email}&gt;
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-tech text-crimson-300 border border-white/[0.08]">
                    {item.service}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 line-clamp-2 font-sans mb-2">
                  {item.message}
                </p>

                <div className="flex items-center gap-4 font-tech text-[10px] text-zinc-500">
                  <span>BUDGET: {item.budget}</span>
                  <span>•</span>
                  <span>DATE: {new Date(item.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="uppercase text-zinc-400">STATUS: {item.status}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setSelectedInquiry(item)}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-tech text-zinc-300 hover:text-white transition-colors"
                  title="View Details"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`mailto:${item.email}?subject=Regarding your project inquiry: ${item.service}`}
                  className="px-3 py-1.5 rounded-lg bg-crimson-600/20 hover:bg-crimson-600 text-crimson-300 hover:text-white border border-crimson-600/40 text-xs font-tech transition-colors flex items-center gap-1"
                  title="Reply via Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">REPLY</span>
                </a>

                {item.status === 'unread' ? (
                  <button
                    type="button"
                    onClick={() => handleStatusChange(item.id, 'read')}
                    className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-tech text-zinc-400 hover:text-white transition-colors"
                    title="Mark as Read"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleStatusChange(item.id, 'unread')}
                    className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-tech text-zinc-400 hover:text-white transition-colors"
                    title="Mark as Unread"
                  >
                    <span className="text-[10px]">UNREAD</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-xs font-tech text-zinc-400 hover:text-red-400 transition-colors"
                  title="Delete Inquiry"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-12 text-center double-bezel-card font-tech">
            <div className="double-bezel-inner p-8">
              <MessageSquare className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
              <p className="text-zinc-400 text-xs">NO INCOMING TRANSMISSIONS FOUND IN THIS VIEW.</p>
            </div>
          </div>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="double-bezel-card max-w-xl w-full p-2 border border-crimson-600/40">
            <div className="double-bezel-inner p-6 sm:p-7 bg-[#08080c]">

              <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="font-tech text-[10px] text-crimson-400 uppercase tracking-widest block mb-1">
                    CLIENT DOSSIER // {selectedInquiry.id}
                  </span>
                  <h4 className="font-monument text-2xl text-white">
                    {selectedInquiry.name}
                  </h4>
                  <p className="font-tech text-xs text-zinc-400">
                    {selectedInquiry.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedInquiry(null)}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] text-zinc-400 hover:text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 space-y-4">
                <div className="grid grid-cols-2 gap-3 font-tech text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-zinc-500 uppercase block">SERVICE</span>
                    <span className="text-white font-semibold">{selectedInquiry.service}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-zinc-500 uppercase block">BUDGET</span>
                    <span className="text-crimson-400 font-semibold">{selectedInquiry.budget}</span>
                  </div>
                </div>

                <div>
                  <span className="font-tech text-[10px] text-zinc-400 uppercase tracking-wider block mb-1.5">
                    PROJECT GOALS & TRANSMISSION TEXT:
                  </span>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-200 leading-relaxed font-sans">
                    {selectedInquiry.message}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-tech text-xs">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=Project Consultation: ${selectedInquiry.service}`}
                  className="px-4 py-2 rounded-xl bg-crimson-600 text-white font-monument tracking-wider text-sm flex items-center gap-1.5 shadow-glow-crimson"
                >
                  <Mail className="w-4 h-4" />
                  <span>DISPATCH EMAIL REPLY</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleStatusChange(selectedInquiry.id, selectedInquiry.status === 'archived' ? 'read' : 'archived')}
                  className="text-zinc-400 hover:text-white"
                >
                  {selectedInquiry.status === 'archived' ? 'UNARCHIVE' : 'ARCHIVE INQUIRY'}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
