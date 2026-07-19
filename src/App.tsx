import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  Megaphone,
  MessageSquare,
  Coins,
  Calendar,
  Search,
  Filter,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  Download,
  Phone,
  User,
  PlusCircle,
  FileText,
  MapPin,
  Tag,
  Check,
  Building,
  UserPlus,
  X,
  ChevronRight,
  TrendingUp,
  Info
} from 'lucide-react';
import {
  INITIAL_HOUSEHOLDS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_COMPLAINTS,
  INITIAL_FINANCES,
  INITIAL_EVENTS,
  Household,
  Resident,
  Announcement,
  Complaint,
  FinanceTransaction,
  CommunityEvent
} from './data';

export default function App() {
  // State from LocalStorage or Initial Data
  const [households, setHouseholds] = useState<Household[]>(() => {
    const saved = localStorage.getItem('tdp44_households');
    return saved ? JSON.parse(saved) : INITIAL_HOUSEHOLDS;
  });
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('tdp44_announcements');
    return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
  });
  const [complaints, setComplaints] = useState<Complaint[]>(() => {
    const saved = localStorage.getItem('tdp44_complaints');
    return saved ? JSON.parse(saved) : INITIAL_COMPLAINTS;
  });
  const [finances, setFinances] = useState<FinanceTransaction[]>(() => {
    const saved = localStorage.getItem('tdp44_finances');
    return saved ? JSON.parse(saved) : INITIAL_FINANCES;
  });
  const [events, setEvents] = useState<CommunityEvent[]>(() => {
    const saved = localStorage.getItem('tdp44_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  // Persist states
  useEffect(() => {
    localStorage.setItem('tdp44_households', JSON.stringify(households));
  }, [households]);
  useEffect(() => {
    localStorage.setItem('tdp44_announcements', JSON.stringify(announcements));
  }, [announcements]);
  useEffect(() => {
    localStorage.setItem('tdp44_complaints', JSON.stringify(complaints));
  }, [complaints]);
  useEffect(() => {
    localStorage.setItem('tdp44_finances', JSON.stringify(finances));
  }, [finances]);
  useEffect(() => {
    localStorage.setItem('tdp44_events', JSON.stringify(events));
  }, [events]);

  // Tab State
  const [activeTab, setActiveTab] = useState<'overview' | 'households' | 'announcements' | 'complaints' | 'finance' | 'events'>('overview');

  // Search & Filters
  const [householdSearch, setHouseholdSearch] = useState('');
  const [selectedCluster, setSelectedCluster] = useState<string>('All');
  const [complaintStatusFilter, setComplaintStatusFilter] = useState<string>('All');
  const [announcementCatFilter, setAnnouncementCatFilter] = useState<string>('All');
  const [financeTypeFilter, setFinanceTypeFilter] = useState<string>('All');

  // Modals / Details Selection
  const [selectedHousehold, setSelectedHousehold] = useState<Household | null>(null);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  // Form states
  const [showAddHousehold, setShowAddHousehold] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);
  const [showAddComplaint, setShowAddComplaint] = useState(false);
  const [showAddFinance, setShowAddFinance] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);

  // New Household Form Input
  const [newHHead, setNewHHead] = useState('');
  const [newHAddress, setNewHAddress] = useState('');
  const [newHCluster, setNewHCluster] = useState('Cụm 1');
  const [newHId, setNewHId] = useState('');

  // New Member Form Input
  const [newMName, setNewMName] = useState('');
  const [newMDob, setNewMDob] = useState('');
  const [newMGender, setNewMGender] = useState<'Nam' | 'Nữ'>('Nam');
  const [newMRelation, setNewMRelation] = useState('Con');
  const [newMPhone, setNewMPhone] = useState('');
  const [newMCccd, setNewMCccd] = useState('');
  const [newMOccupation, setNewMOccupation] = useState('');

  // New Announcement Form Input
  const [newATitle, setNewATitle] = useState('');
  const [newAContent, setNewAContent] = useState('');
  const [newACategory, setNewACategory] = useState<'Họp tổ dân phố' | 'Y tế' | 'Cảnh báo' | 'Sự kiện' | 'Thuế & Quỹ'>('Họp tổ dân phố');
  const [newAPriority, setNewAPriority] = useState<'Bình thường' | 'Quan trọng' | 'Khẩn cấp'>('Bình thường');
  const [newATarget, setNewATarget] = useState('Toàn thể nhân dân');
  const [newALocation, setNewALocation] = useState('');
  const [newAEventTime, setNewAEventTime] = useState('');

  // New Complaint Form Input
  const [newCSender, setNewCSender] = useState('');
  const [newCAddress, setNewCAddress] = useState('');
  const [newCCluster, setNewCCluster] = useState('Cụm 1');
  const [newCPhone, setNewCPhone] = useState('');
  const [newCTitle, setNewCTitle] = useState('');
  const [newCContent, setNewCContent] = useState('');
  const [newCCategory, setNewCCategory] = useState<'Cơ sở hạ tầng' | 'An ninh trật tự' | 'Vệ sinh môi trường' | 'Ý kiến đóng góp'>('Cơ sở hạ tầng');

  // New Finance Form Input
  const [newFType, setNewFType] = useState<'Thu' | 'Chi'>('Thu');
  const [newFCategory, setNewFCategory] = useState<'Quỹ hoạt động' | 'Quỹ khuyến học' | 'Quỹ đền ơn đáp nghĩa' | 'Quỹ phòng chống thiên tai' | 'Chi hoạt động'>('Quỹ hoạt động');
  const [newFAmount, setNewFAmount] = useState('');
  const [newFDesc, setNewFDesc] = useState('');
  const [newFPerformer, setNewFPerformer] = useState('Nguyễn Thị Minh (Thủ quỹ)');

  // New Event Form Input
  const [newETitle, setNewETitle] = useState('');
  const [newEDesc, setNewEDesc] = useState('');
  const [newEDate, setNewEDate] = useState('');
  const [newETime, setNewETime] = useState('');
  const [newELocation, setNewELocation] = useState('');
  const [newEType, setNewEType] = useState<'Họp dân' | 'Văn nghệ' | 'Y tế' | 'Môi trường'>('Họp dân');
  const [newEHost, setNewEHost] = useState('Ban điều hành Tổ dân phố');
  const [newEExpected, setNewEExpected] = useState('Đại diện các hộ dân');

  // Complaint Response Input
  const [complaintResponse, setComplaintResponse] = useState('');

  // Toast System
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Helper Calculations
  const totalHouseholdsInState = households.length + 837; // keep realistic base of 842 offset
  const totalPopulationInState = households.reduce((acc, h) => acc + h.memberCount, 0) + 3088; // base 3105 offset
  const totalPendingComplaints = complaints.filter(c => c.status !== 'Đã xong').length;
  const currentFundBalance = finances.reduce((sum, trans) => {
    return trans.type === 'Thu' ? sum + trans.amount : sum - trans.amount;
  }, 45200000 - finances.reduce((sum, trans) => trans.type === 'Thu' ? 0 : 0, 0)); // base offset

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  // Handler Submissions
  const handleAddHousehold = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHHead || !newHAddress || !newHId) {
      showToast('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
      return;
    }
    const newH: Household = {
      id: `H_${Date.now()}`,
      householdId: `HK-044-${newHId}`,
      headName: newHHead,
      address: newHAddress.startsWith('Căn') ? newHAddress : `Căn ${newHAddress}`,
      cluster: newHCluster,
      memberCount: 1,
      verified: true,
      registrationDate: new Date().toISOString().split('T')[0],
      members: [
        {
          id: `R_${Date.now()}`,
          name: newHHead,
          dob: '1980-01-01',
          gender: 'Nam',
          relation: 'Chủ hộ',
          occupation: 'Chưa cập nhật'
        }
      ]
    };
    setHouseholds([newH, ...households]);
    setShowAddHousehold(false);
    setNewHHead('');
    setNewHAddress('');
    setNewHId('');
    showToast(`Đã thêm thành công hộ dân của chủ hộ ${newHHead}!`);
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHousehold || !newMName || !newMDob) {
      showToast('Vui lòng điền đầy đủ Họ tên và Ngày sinh!', 'error');
      return;
    }
    const newRes: Resident = {
      id: `R_${Date.now()}`,
      name: newMName,
      dob: newMDob,
      gender: newMGender,
      relation: newMRelation,
      phone: newMPhone || undefined,
      cccd: newMCccd || undefined,
      occupation: newMOccupation || undefined
    };
    const updatedHouseholds = households.map(h => {
      if (h.id === selectedHousehold.id) {
        const updatedMembers = [...h.members, newRes];
        return {
          ...h,
          members: updatedMembers,
          memberCount: updatedMembers.length
        };
      }
      return h;
    });
    setHouseholds(updatedHouseholds);
    const updatedH = updatedHouseholds.find(h => h.id === selectedHousehold.id);
    if (updatedH) setSelectedHousehold(updatedH);

    setShowAddMember(false);
    setNewMName('');
    setNewMDob('');
    setNewMRelation('Con');
    setNewMPhone('');
    setNewMCccd('');
    setNewMOccupation('');
    showToast(`Đã thêm thành viên ${newMName} vào hộ ${selectedHousehold.headName}!`);
  };

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newATitle || !newAContent) {
      showToast('Vui lòng nhập Tiêu đề và Nội dung!', 'error');
      return;
    }
    const newAnn: Announcement = {
      id: `A_${Date.now()}`,
      title: newATitle,
      content: newAContent,
      category: newACategory,
      timestamp: 'Vừa xong',
      author: 'Ban điều hành TDP 44',
      priority: newAPriority,
      targetAudience: newATarget,
      location: newALocation || undefined,
      eventTime: newAEventTime || undefined
    };
    setAnnouncements([newAnn, ...announcements]);
    setShowAddAnnouncement(false);
    setNewATitle('');
    setNewAContent('');
    setNewALocation('');
    setNewAEventTime('');
    showToast('Thông báo mới đã được gửi và niêm yết bảng tin!');
  };

  const handleAddComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCSender || !newCTitle || !newCContent) {
      showToast('Vui lòng cung cấp Người gửi, Tiêu đề và Nội dung!', 'error');
      return;
    }
    const newComp: Complaint = {
      id: `C_${Date.now()}`,
      senderName: newCSender,
      senderAddress: newCAddress.startsWith('Căn') ? newCAddress : `Căn ${newCAddress}`,
      senderCluster: newCCluster,
      phone: newCPhone,
      title: newCTitle,
      content: newCContent,
      category: newCCategory,
      status: 'Mới nhận',
      date: new Date().toISOString().split('T')[0]
    };
    setComplaints([newComp, ...complaints]);
    setShowAddComplaint(false);
    setNewCSender('');
    setNewCAddress('');
    setNewCPhone('');
    setNewCTitle('');
    setNewCContent('');
    showToast('Ý kiến phản ánh đã gửi thành công tới Tổ trưởng!');
  };

  const handleAddFinance = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(newFAmount);
    if (!newFDesc || isNaN(parsedAmount) || parsedAmount <= 0) {
      showToast('Vui lòng điền nội dung và số tiền hợp lệ!', 'error');
      return;
    }
    const newTrans: FinanceTransaction = {
      id: `F_${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: newFType,
      category: newFCategory,
      amount: parsedAmount,
      description: newFDesc,
      performer: newFPerformer
    };
    setFinances([newTrans, ...finances]);
    setShowAddFinance(false);
    setNewFAmount('');
    setNewFDesc('');
    showToast(`Đã ghi nhận giao dịch ${newFType} quỹ ${formatCurrency(parsedAmount)}!`);
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newETitle || !newEDate || !newELocation) {
      showToast('Vui lòng nhập tên sự kiện, ngày tổ chức và địa điểm!', 'error');
      return;
    }
    const newEv: CommunityEvent = {
      id: `E_${Date.now()}`,
      title: newETitle,
      description: newEDesc,
      date: newEDate,
      time: newETime || 'Cả ngày',
      location: newELocation,
      type: newEType,
      host: newEHost,
      expectedAttendees: newEExpected
    };
    setEvents([newEv, ...events]);
    setShowAddEvent(false);
    setNewETitle('');
    setNewEDesc('');
    setNewEDate('');
    setNewETime('');
    setNewELocation('');
    showToast('Lịch sự kiện, cuộc họp mới đã được thêm thành công!');
  };

  const handleUpdateComplaintStatus = (id: string, nextStatus: 'Mới nhận' | 'Đang xử lý' | 'Đã xong') => {
    const updated = complaints.map(c => {
      if (c.id === id) {
        return {
          ...c,
          status: nextStatus,
          response: complaintResponse || c.response,
          responseDate: complaintResponse ? new Date().toISOString().split('T')[0] : c.responseDate
        };
      }
      return c;
    });
    setComplaints(updated);
    const updatedComp = updated.find(c => c.id === id);
    if (updatedComp) setSelectedComplaint(updatedComp);
    setComplaintResponse('');
    showToast(`Đã chuyển trạng thái phản ánh sang "${nextStatus}"!`);
  };

  const handleDeleteHousehold = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa hộ dân này khỏi danh sách quản lý?')) {
      setHouseholds(households.filter(h => h.id !== id));
      setSelectedHousehold(null);
      showToast('Đã xóa hộ khẩu thành công', 'info');
    }
  };

  const handleDeleteComplaint = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa kiến nghị này?')) {
      setComplaints(complaints.filter(c => c.id !== id));
      setSelectedComplaint(null);
      showToast('Đã xóa kiến nghị thành công', 'info');
    }
  };

  const handleExportData = (type: 'households' | 'complaints' | 'finances') => {
    let headers = '';
    let rows = '';
    let fileName = '';

    if (type === 'households') {
      headers = 'Mã Hộ Khẩu,Chủ Hộ,Địa Chỉ,Phân Khu,Số Nhân Khẩu,Ngày Đăng Ký\n';
      rows = households.map(h => `"${h.householdId}","${h.headName}","${h.address}","${h.cluster}",${h.memberCount},"${h.registrationDate}"`).join('\n');
      fileName = 'Danh_sach_ho_dan_to_44.csv';
    } else if (type === 'complaints') {
      headers = 'Người gửi,Địa Chỉ,Cụm,Tiêu Đề,Trạng Thái,Ngày Gửi\n';
      rows = complaints.map(c => `"${c.senderName}","${c.senderAddress}","${c.senderCluster}","${c.title}","${c.status}","${c.date}"`).join('\n');
      fileName = 'Bao_cao_kien_nghi_to_44.csv';
    } else {
      headers = 'Ngày Giao Dịch,Loại,Hạng Mục,Số Tiền (VND),Mô Tả,Người Thực Hiện\n';
      rows = finances.map(f => `"${f.date}","${f.type}","${f.category}",${f.amount},"${f.description}","${f.performer}"`).join('\n');
      fileName = 'Sao_ke_tai_chinh_to_44.csv';
    }

    const blob = new Blob([`\ufeff${headers}${rows}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Đã xuất báo cáo ${fileName} thành công!`);
  };

  return (
    <div id="app_root" className="flex flex-col h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* Toast Alert Banner */}
      {toast && (
        <div id="toast_container" className="fixed top-4 right-4 z-50 flex items-center p-4 rounded-xl border shadow-lg max-w-sm animate-fade-in bg-white border-slate-200">
          <div className={`mr-3 p-2 rounded-lg ${toast.type === 'success' ? 'bg-green-100 text-green-700' : toast.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
            {toast.type === 'success' ? <CheckCircle size={18} /> : toast.type === 'error' ? <AlertTriangle size={18} /> : <Info size={18} />}
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-800">{toast.message}</p>
          </div>
          <button onClick={() => setToast(null)} className="ml-2 text-slate-400 hover:text-slate-600">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Header Panel */}
      <header id="app_header" className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded font-extrabold text-xl shadow-md shadow-indigo-200">44</div>
          <div>
            <h1 className="font-black text-xl leading-none text-slate-900">Ứng dụng Tổ dân phố 44</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Hệ thống quản lý dân cư số phường Dịch Vọng Hậu</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-end border-r border-slate-200 pr-6">
            <span className="font-bold text-sm text-slate-800">Nguyễn Văn An</span>
            <span className="text-[9px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-black uppercase mt-0.5 tracking-wider">Tổ trưởng</span>
          </div>
          <div className="w-10 h-10 bg-indigo-600 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
            AN
          </div>
        </div>
      </header>

      {/* Workspace Area */}
      <div id="main_workspace" className="flex flex-1 overflow-hidden">
        
        {/* Left Side Navigation Panel */}
        <nav id="sidebar_nav" className="w-64 bg-slate-900 text-slate-300 flex flex-col p-4 shrink-0 justify-between">
          <div className="space-y-1">
            <button
              id="tab_overview"
              onClick={() => { setActiveTab('overview'); setSelectedHousehold(null); setSelectedComplaint(null); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all font-semibold text-sm ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 font-bold' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <LayoutDashboard size={18} />
              <span>Tổng quan</span>
            </button>
            <button
              id="tab_households"
              onClick={() => { setActiveTab('households'); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all font-semibold text-sm ${activeTab === 'households' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 font-bold' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <Users size={18} />
              <span>Hộ dân & Nhân khẩu</span>
            </button>
            <button
              id="tab_announcements"
              onClick={() => { setActiveTab('announcements'); setSelectedAnnouncement(null); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all font-semibold text-sm ${activeTab === 'announcements' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 font-bold' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <Megaphone size={18} />
              <span>Thông báo / Giấy mời</span>
            </button>
            <button
              id="tab_complaints"
              onClick={() => { setActiveTab('complaints'); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all font-semibold text-sm ${activeTab === 'complaints' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 font-bold' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <MessageSquare size={18} />
              <span>Phản ánh & Kiến nghị</span>
              {totalPendingComplaints > 0 && (
                <span className="ml-auto bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {totalPendingComplaints}
                </span>
              )}
            </button>
            <button
              id="tab_finance"
              onClick={() => { setActiveTab('finance'); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all font-semibold text-sm ${activeTab === 'finance' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 font-bold' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <Coins size={18} />
              <span>Quỹ & Tài chính</span>
            </button>
            <button
              id="tab_events"
              onClick={() => { setActiveTab('events'); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all font-semibold text-sm ${activeTab === 'events' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 font-bold' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <Calendar size={18} />
              <span>Sự kiện & Lịch họp</span>
            </button>
          </div>

          <div id="support_panel" className="p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-inner">
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-wider mb-1">Hỗ trợ kỹ thuật số</p>
            <p className="text-sm font-bold text-white">Hotline: 090.123.4567</p>
            <p className="text-[10px] text-slate-400 mt-1">Hệ thống quản lý dân cư TDP 44</p>
          </div>
        </nav>

        {/* Center Main Dashboard Workspace */}
        <main id="main_content" className="flex-1 p-8 overflow-y-auto bg-slate-50">
          
          {/* TAB 1: TỔNG QUAN (OVERVIEW) */}
          {activeTab === 'overview' && (
            <div id="view_overview" className="space-y-8 animate-fade-in">
              
              {/* Stat Bento Grid */}
              <div id="stat_grid" className="grid grid-cols-4 gap-6">
                
                {/* Stat Card 1 */}
                <div id="stat_households" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-400 transition-all cursor-pointer" onClick={() => setActiveTab('households')}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-slate-500 text-xs font-black uppercase tracking-wider">Tổng số hộ</p>
                    <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded">
                      <Building size={16} />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-slate-950">{totalHouseholdsInState}</h2>
                    <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded">+5 tháng này</span>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div id="stat_population" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-400 transition-all cursor-pointer" onClick={() => setActiveTab('households')}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-slate-500 text-xs font-black uppercase tracking-wider">Nhân khẩu</p>
                    <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded">
                      <User size={16} />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-slate-950">{totalPopulationInState.toLocaleString()}</h2>
                    <span className="text-slate-500 text-xs font-bold bg-slate-100 px-2 py-0.5 rounded">Đã xác minh</span>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div id="stat_complaints" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-orange-400 hover:border-orange-300 transition-all cursor-pointer" onClick={() => setActiveTab('complaints')}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-slate-500 text-xs font-black uppercase tracking-wider">Kiến nghị mới</p>
                    <div className="p-1.5 bg-orange-50 text-orange-600 rounded">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-slate-950">{complaints.filter(c => c.status === 'Mới nhận').length}</h2>
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-black uppercase">Cần xử lý</span>
                  </div>
                </div>

                {/* Stat Card 4 */}
                <div id="stat_funds" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-indigo-600 hover:border-indigo-500 transition-all cursor-pointer" onClick={() => setActiveTab('finance')}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-slate-500 text-xs font-black uppercase tracking-wider">Quỹ khu phố</p>
                    <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded">
                      <Coins size={16} />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-black text-slate-950 tracking-tight">{(currentFundBalance / 1000).toLocaleString()}k</h2>
                    <span className="text-indigo-600 text-[10px] font-black bg-indigo-50 px-2 py-0.5 rounded">Chi tiết quỹ</span>
                  </div>
                </div>
              </div>

              {/* Main Content Splits */}
              <div className="grid grid-cols-2 gap-8">
                
                {/* Split Left Column: Announcements */}
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[420px] overflow-hidden">
                  <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/55">
                    <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest flex items-center">
                      <Megaphone className="mr-2 text-indigo-600" size={16} />
                      Thông báo gần đây
                    </h3>
                    <button onClick={() => setActiveTab('announcements')} className="text-xs text-indigo-600 font-bold hover:underline">Xem tất cả</button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {announcements.slice(0, 3).map((ann) => (
                      <div key={ann.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer" onClick={() => { setSelectedAnnouncement(ann); setActiveTab('announcements'); }}>
                        <div className="flex justify-between mb-1.5">
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${
                            ann.category === 'Cảnh báo' ? 'bg-red-100 text-red-700' :
                            ann.category === 'Họp tổ dân phố' ? 'bg-indigo-100 text-indigo-700' :
                            ann.category === 'Y tế' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {ann.category}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">{ann.timestamp}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1 leading-snug line-clamp-1">{ann.title}</h4>
                        <p className="text-xs text-slate-600 line-clamp-2">{ann.content}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Split Right Column: Complaints Table */}
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[420px] overflow-hidden">
                  <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/55">
                    <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest flex items-center">
                      <MessageSquare className="mr-2 text-indigo-600" size={16} />
                      Kiến nghị mới nhất
                    </h3>
                    <button onClick={() => setActiveTab('complaints')} className="text-xs text-indigo-600 font-bold hover:underline">Phản ánh mới</button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <table className="w-full text-left">
                      <thead className="text-[10px] uppercase font-black text-slate-400">
                        <tr>
                          <th className="pb-3 pl-2">Người gửi</th>
                          <th className="pb-3">Nội dung</th>
                          <th className="pb-3 text-right">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs divide-y divide-slate-100">
                        {complaints.map((c) => (
                          <tr key={c.id} className="hover:bg-slate-50/70 cursor-pointer" onClick={() => { setSelectedComplaint(c); setActiveTab('complaints'); }}>
                            <td className="py-3 pl-2">
                              <p className="font-bold text-slate-800">{c.senderName}</p>
                              <p className="text-[10px] text-slate-400">{c.senderAddress} • {c.senderCluster}</p>
                            </td>
                            <td className="py-3 pr-4">
                              <p className="font-semibold text-slate-900 line-clamp-1">{c.title}</p>
                              <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{c.content}</p>
                            </td>
                            <td className="py-3 text-right">
                              <span className={`inline-block text-[9px] font-black px-2 py-0.5 rounded uppercase ${
                                c.status === 'Mới nhận' ? 'text-orange-600 bg-orange-50 border border-orange-100' :
                                c.status === 'Đang xử lý' ? 'text-blue-600 bg-blue-50 border border-blue-100' :
                                'text-green-600 bg-green-50 border border-green-100'
                              }`}>
                                {c.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold">Thống kê tháng này</span>
                    <button onClick={() => handleExportData('complaints')} className="flex items-center space-x-1 bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-bold text-slate-700 hover:bg-slate-100 shadow-sm">
                      <Download size={12} />
                      <span>XUẤT BÁO CÁO PHẢN ÁNH</span>
                    </button>
                  </div>
                </section>
              </div>

            </div>
          )}

          {/* TAB 2: HỘ DÂN & NHÂN KHẨU */}
          {activeTab === 'households' && (
            <div id="view_households" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Danh sách Hộ dân & Nhân khẩu</h2>
                  <p className="text-xs text-slate-500 mt-1">Quản lý hồ sơ cư trú số và thành viên gia đình trong tổ.</p>
                </div>
                <div className="flex space-x-3">
                  <button onClick={() => handleExportData('households')} className="flex items-center space-x-1.5 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm hover:bg-slate-100">
                    <Download size={14} />
                    <span>Xuất CSV</span>
                  </button>
                  <button onClick={() => setShowAddHousehold(true)} className="flex items-center space-x-1.5 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 shadow-indigo-200">
                    <Plus size={14} />
                    <span>Đăng ký Hộ khẩu Mới</span>
                  </button>
                </div>
              </div>

              {/* Filtering bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    placeholder="Tìm theo tên chủ hộ, số nhà hoặc mã hộ..."
                    value={householdSearch}
                    onChange={(e) => setHouseholdSearch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center">
                    <Filter className="mr-1.5 text-indigo-500" size={14} /> Cụm dân cư:
                  </span>
                  {['All', 'Cụm 1', 'Cụm 2', 'Cụm 3', 'Cụm 4'].map((cl) => (
                    <button
                      key={cl}
                      onClick={() => setSelectedCluster(cl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${selectedCluster === cl ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {cl === 'All' ? 'Tất cả' : cl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Layout: Household list (left) + Household Detail Panel (right) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Households Table Column */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase text-slate-500">
                      <tr>
                        <th className="p-4 pl-6">Mã Hộ khẩu</th>
                        <th className="p-4">Chủ Hộ / Địa chỉ</th>
                        <th className="p-4">Cụm</th>
                        <th className="p-4 text-center">Thành viên</th>
                        <th className="p-4 text-right pr-6">Hành động</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {households
                        .filter(h => {
                          const matchSearch = h.headName.toLowerCase().includes(householdSearch.toLowerCase()) ||
                                              h.address.toLowerCase().includes(householdSearch.toLowerCase()) ||
                                              h.householdId.toLowerCase().includes(householdSearch.toLowerCase());
                          const matchCluster = selectedCluster === 'All' || h.cluster === selectedCluster;
                          return matchSearch && matchCluster;
                        })
                        .map((h) => (
                          <tr
                            key={h.id}
                            onClick={() => setSelectedHousehold(h)}
                            className={`hover:bg-slate-50 cursor-pointer transition-all ${selectedHousehold?.id === h.id ? 'bg-indigo-50/60 font-medium border-l-4 border-l-indigo-600' : ''}`}
                          >
                            <td className="p-4 pl-6 font-mono font-bold text-slate-700">{h.householdId}</td>
                            <td className="p-4">
                              <p className="font-bold text-slate-900">{h.headName}</p>
                              <p className="text-xs text-slate-500 mt-0.5">{h.address}</p>
                            </td>
                            <td className="p-4">
                              <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                {h.cluster}
                              </span>
                            </td>
                            <td className="p-4 text-center font-bold text-slate-800">
                              {h.members.length}
                            </td>
                            <td className="p-4 text-right pr-6" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => setSelectedHousehold(h)}
                                className="text-xs font-bold text-indigo-600 hover:underline mr-4"
                              >
                                Xem hồ sơ
                              </button>
                              <button
                                onClick={() => handleDeleteHousehold(h.id)}
                                className="text-xs font-bold text-red-500 hover:text-red-700"
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Selected Household Detail View */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 min-h-[400px]">
                  {selectedHousehold ? (
                    <div className="space-y-6">
                      <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                        <div>
                          <p className="text-[10px] text-indigo-600 font-black uppercase tracking-wider font-mono">{selectedHousehold.householdId}</p>
                          <h3 className="font-black text-lg text-slate-900 mt-1">{selectedHousehold.headName}</h3>
                          <p className="text-xs text-slate-500 mt-1 flex items-center">
                            <MapPin size={12} className="mr-1 text-slate-400" />
                            {selectedHousehold.address} • {selectedHousehold.cluster}
                          </p>
                        </div>
                        <span className={`text-[9px] font-black px-2.5 py-1 rounded uppercase ${selectedHousehold.verified ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {selectedHousehold.verified ? 'Đã duyệt' : 'Chờ duyệt'}
                        </span>
                      </div>

                      {/* Resident members list */}
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider">Thành viên hộ khẩu ({selectedHousehold.members.length})</h4>
                          <button
                            onClick={() => setShowAddMember(true)}
                            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-0.5"
                          >
                            <UserPlus size={14} className="mr-0.5" /> Thêm thành viên
                          </button>
                        </div>

                        <div className="space-y-3">
                          {selectedHousehold.members.map((res) => (
                            <div key={res.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-slate-900 text-sm">{res.name}</span>
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase ${res.relation === 'Chủ hộ' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-700'}`}>
                                  {res.relation}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                                <div>NS: {res.dob} ({res.gender})</div>
                                {res.occupation && <div className="text-right">Nghề: {res.occupation}</div>}
                                {res.phone && <div className="col-span-2 flex items-center"><Phone size={10} className="mr-1" /> {res.phone}</div>}
                                {res.cccd && <div className="col-span-2 font-mono text-[10px]">CCCD/CMND: {res.cccd}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-slate-400 border-t border-slate-100 pt-4">
                        Ngày tạo sổ hộ cư trú: {selectedHousehold.registrationDate}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-80 text-center text-slate-400">
                      <Users className="mb-3 text-slate-300" size={48} />
                      <p className="font-bold text-slate-500">Chưa chọn hộ dân nào</p>
                      <p className="text-xs mt-1 max-w-[200px]">Hãy nhấp chọn một hộ dân từ bảng bên trái để xem hồ sơ chi tiết và quản lý nhân khẩu.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: THÔNG BÁO / GIẤY MỜI */}
          {activeTab === 'announcements' && (
            <div id="view_announcements" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Thông báo / Giấy mời họp</h2>
                  <p className="text-xs text-slate-500 mt-1">Bảng tin điện tử cập nhật thông tin họp hành, y tế, và cảnh báo trong khu dân cư.</p>
                </div>
                <button onClick={() => setShowAddAnnouncement(true)} className="flex items-center space-x-1.5 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 shadow-indigo-200">
                  <Plus size={14} />
                  <span>Phát hành thông báo mới</span>
                </button>
              </div>

              {/* Filters categories */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap gap-2">
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center mr-2">Hạng mục:</span>
                {['All', 'Họp tổ dân phố', 'Y tế', 'Cảnh báo', 'Sự kiện', 'Thuế & Quỹ'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setAnnouncementCatFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${announcementCatFilter === cat ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {cat === 'All' ? 'Tất cả thông báo' : cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                {/* Announcement list */}
                <div className="md:col-span-2 space-y-4">
                  {announcements
                    .filter(ann => announcementCatFilter === 'All' || ann.category === announcementCatFilter)
                    .map((ann) => (
                      <div
                        key={ann.id}
                        onClick={() => setSelectedAnnouncement(ann)}
                        className={`bg-white p-6 rounded-2xl border transition-all cursor-pointer shadow-sm flex flex-col justify-between ${selectedAnnouncement?.id === ann.id ? 'ring-2 ring-indigo-600' : 'hover:border-indigo-300'}`}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded uppercase ${
                              ann.priority === 'Khẩn cấp' ? 'bg-red-100 text-red-700 animate-pulse' :
                              ann.priority === 'Quan trọng' ? 'bg-orange-100 text-orange-700' : 'bg-indigo-100 text-indigo-700'
                            }`}>
                              {ann.category} • {ann.priority}
                            </span>
                            <span className="text-xs text-slate-400 font-bold">{ann.timestamp}</span>
                          </div>
                          <h3 className="font-black text-lg text-slate-900 mb-2">{ann.title}</h3>
                          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">{ann.content}</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-3 text-xs text-slate-500 font-bold">
                          <span>Nơi nhận: <strong className="text-slate-700">{ann.targetAudience}</strong></span>
                          <span>Người ký: <strong className="text-slate-700">{ann.author}</strong></span>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Detailed view of the selected announcement */}
                <div className="bg-indigo-950 text-indigo-100 rounded-2xl p-6 space-y-6 shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 bg-indigo-900 w-44 h-44 rounded-full opacity-30"></div>
                  {selectedAnnouncement ? (
                    <div className="space-y-6 relative z-10">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-800 text-indigo-200 px-2.5 py-1 rounded">BẢNG TIN CHI TIẾT</span>
                        <h3 className="font-black text-2xl text-white mt-4 leading-tight">{selectedAnnouncement.title}</h3>
                        <p className="text-xs text-indigo-300 mt-2">Người đăng: {selectedAnnouncement.author} • {selectedAnnouncement.timestamp}</p>
                      </div>

                      <div className="bg-indigo-900/50 p-4 rounded-xl space-y-3 text-xs border border-indigo-800">
                        {selectedAnnouncement.eventTime && (
                          <div className="flex items-start">
                            <Clock size={16} className="text-indigo-400 mr-2 mt-0.5 shrink-0" />
                            <div>
                              <p className="font-bold text-indigo-200 uppercase tracking-wide">Thời gian diễn ra:</p>
                              <p className="text-white mt-0.5">{selectedAnnouncement.eventTime}</p>
                            </div>
                          </div>
                        )}
                        {selectedAnnouncement.location && (
                          <div className="flex items-start">
                            <MapPin size={16} className="text-indigo-400 mr-2 mt-0.5 shrink-0" />
                            <div>
                              <p className="font-bold text-indigo-200 uppercase tracking-wide">Địa điểm tập hợp:</p>
                              <p className="text-white mt-0.5">{selectedAnnouncement.location}</p>
                            </div>
                          </div>
                        )}
                        <div className="flex items-start">
                          <Tag size={16} className="text-indigo-400 mr-2 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-bold text-indigo-200 uppercase tracking-wide">Đối tượng áp dụng:</p>
                            <p className="text-white mt-0.5">{selectedAnnouncement.targetAudience}</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-indigo-800/80 pt-4">
                        <p className="text-sm leading-relaxed text-indigo-200 whitespace-pre-wrap">{selectedAnnouncement.content}</p>
                      </div>

                      <div className="border-t border-indigo-800/80 pt-4 flex justify-between items-center text-xs text-indigo-300">
                        <span>Danh mục: <strong>{selectedAnnouncement.category}</strong></span>
                        <button
                          onClick={() => {
                            if (window.confirm('Bạn có chắc chắn muốn gỡ thông báo này khỏi bảng tin?')) {
                              setAnnouncements(announcements.filter(a => a.id !== selectedAnnouncement.id));
                              setSelectedAnnouncement(null);
                              showToast('Đã gỡ bỏ thông báo thành công');
                            }
                          }}
                          className="text-red-400 font-bold hover:text-red-300"
                        >
                          Gỡ thông báo
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-80 text-center text-indigo-300 relative z-10">
                      <Megaphone className="mb-3 text-indigo-500 animate-bounce" size={48} />
                      <p className="font-bold text-white">Chưa chọn thông báo</p>
                      <p className="text-xs mt-1 max-w-[200px]">Hãy nhấp vào một tin thông báo từ bảng bên trái để xem đầy đủ thông tin thời gian, địa điểm cuộc họp.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: PHẢN ÁNH & KIẾN NGHỊ */}
          {activeTab === 'complaints' && (
            <div id="view_complaints" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Phản ánh & Kiến nghị của người dân</h2>
                  <p className="text-xs text-slate-500 mt-1">Nơi tiếp nhận trực tuyến ý kiến đóng góp, phản ánh dân sinh và giải quyết các vướng mắc của bà con.</p>
                </div>
                <button onClick={() => setShowAddComplaint(true)} className="flex items-center space-x-1.5 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 shadow-indigo-200">
                  <Plus size={14} />
                  <span>Gửi Phản ánh Dân cư Mới</span>
                </button>
              </div>

              {/* Status filtering bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center">
                    <Filter className="mr-1.5 text-indigo-500" size={14} /> Trạng thái xử lý:
                  </span>
                  {['All', 'Mới nhận', 'Đang xử lý', 'Đã xong'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setComplaintStatusFilter(st)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${complaintStatusFilter === st ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {st === 'All' ? 'Tất cả trạng thái' : st}
                    </button>
                  ))}
                </div>
                <button onClick={() => handleExportData('complaints')} className="flex items-center space-x-1 bg-white border border-slate-200 text-slate-700 px-3.5 py-2 rounded-xl font-bold text-xs shadow-sm hover:bg-slate-50">
                  <Download size={14} />
                  <span>Xuất báo cáo ý kiến</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Left side: complaints list */}
                <div className="lg:col-span-2 space-y-4">
                  {complaints
                    .filter(c => complaintStatusFilter === 'All' || c.status === complaintStatusFilter)
                    .map((c) => (
                      <div
                        key={c.id}
                        onClick={() => setSelectedComplaint(c)}
                        className={`bg-white p-5 rounded-2xl border shadow-sm transition-all cursor-pointer ${selectedComplaint?.id === c.id ? 'ring-2 ring-indigo-600' : 'hover:border-indigo-300'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-[10px] font-black bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md uppercase">
                              {c.category}
                            </span>
                            <span className="text-xs text-slate-400 font-medium ml-3">{c.date}</span>
                          </div>
                          <span className={`text-[10px] font-black px-2.5 py-1 rounded uppercase ${
                            c.status === 'Mới nhận' ? 'bg-orange-100 text-orange-700' :
                            c.status === 'Đang xử lý' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {c.status}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2 leading-snug">{c.title}</h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{c.content}</p>
                        
                        <div className="border-t border-slate-50 mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Gửi bởi: <strong className="text-slate-700">{c.senderName}</strong> ({c.senderAddress} • {c.senderCluster})</span>
                          {c.response && <span className="text-green-600 font-bold flex items-center"><Check size={12} className="mr-0.5" /> Đã phản hồi</span>}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Right side: Complaint management panel */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
                  {selectedComplaint ? (
                    <div className="space-y-6">
                      <div className="border-b border-slate-100 pb-4 space-y-2">
                        <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">CHI TIẾT KIẾN NGHỊ</span>
                        <h3 className="font-black text-lg text-slate-900 leading-tight pt-1">{selectedComplaint.title}</h3>
                        <div className="text-xs text-slate-500 space-y-1 pt-1">
                          <p>Người gửi: <strong>{selectedComplaint.senderName}</strong></p>
                          <p>Địa chỉ: {selectedComplaint.senderAddress} ({selectedComplaint.senderCluster})</p>
                          <p>Điện thoại: {selectedComplaint.phone}</p>
                          <p>Ngày gửi: {selectedComplaint.date}</p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                        <p className="font-semibold text-slate-900 mb-1">Nội dung phản ánh:</p>
                        <p className="whitespace-pre-line">{selectedComplaint.content}</p>
                      </div>

                      {/* Official response section */}
                      <div className="space-y-3">
                        <p className="text-xs font-black text-slate-800 uppercase tracking-wider">Thông tin phản hồi chính thức:</p>
                        
                        {selectedComplaint.response ? (
                          <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-xs text-slate-700 space-y-2">
                            <p className="font-bold text-green-800">Ý kiến phản hồi từ Ban cán sự ({selectedComplaint.responseDate}):</p>
                            <p className="italic leading-relaxed">"{selectedComplaint.response}"</p>
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400 bg-slate-50 p-3 rounded-lg text-center">
                            Chưa có phản hồi chính thức cho kiến nghị này.
                          </div>
                        )}

                        {/* Actions to update status and send response */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 pt-4">
                          <p className="text-xs font-bold text-slate-700">Cập nhật phản hồi & xử lý của Tổ trưởng:</p>
                          <textarea
                            rows={3}
                            placeholder="Nhập nội dung phản hồi chính thức cho hộ dân..."
                            value={complaintResponse}
                            onChange={(e) => setComplaintResponse(e.target.value)}
                            className="w-full bg-white border border-slate-200 p-2 rounded-lg text-xs focus:outline-none focus:border-indigo-500"
                          />
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => handleUpdateComplaintStatus(selectedComplaint.id, 'Đang xử lý')}
                              className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-200 transition-colors"
                            >
                              Xử lý
                            </button>
                            <button
                              onClick={() => handleUpdateComplaintStatus(selectedComplaint.id, 'Đã xong')}
                              className="bg-green-600 text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-green-700 shadow-sm transition-colors"
                            >
                              Hoàn thành & Gửi
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                        <button
                          onClick={() => handleDeleteComplaint(selectedComplaint.id)}
                          className="text-red-500 font-bold hover:text-red-700"
                        >
                          Xóa kiến nghị
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-80 text-center text-slate-400">
                      <MessageSquare className="mb-3 text-slate-300" size={48} />
                      <p className="font-bold text-slate-500">Chưa chọn kiến nghị</p>
                      <p className="text-xs mt-1 max-w-[200px]">Hãy nhấp chọn một ý kiến phản ánh từ danh sách bên trái để phản hồi và cập nhật tiến trình xử lý.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: QUỸ & TÀI CHÍNH */}
          {activeTab === 'finance' && (
            <div id="view_finance" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Quản lý Quỹ & Tài chính Tổ dân phố</h2>
                  <p className="text-xs text-slate-500 mt-1">Công khai, minh bạch các khoản đóng góp tự nguyện, quỹ khuyến học và chi tiêu công ích của khu phố.</p>
                </div>
                <div className="flex space-x-3">
                  <button onClick={() => handleExportData('finances')} className="flex items-center space-x-1.5 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm hover:bg-slate-100">
                    <Download size={14} />
                    <span>Xuất Sổ quỹ</span>
                  </button>
                  <button onClick={() => setShowAddFinance(true)} className="flex items-center space-x-1.5 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 shadow-indigo-200">
                    <Plus size={14} />
                    <span>Ghi chép Thu / Chi</span>
                  </button>
                </div>
              </div>

              {/* Balances detailed list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-slate-500 text-xs font-black uppercase tracking-wider mb-1">Quỹ hoạt động khu phố</p>
                  <h3 className="text-2xl font-black text-slate-950">{formatCurrency(32400000)}</h3>
                  <div className="text-[10px] text-slate-400 mt-2">Dùng cho chi tiêu thường niên, sửa chữa bóng đèn, công ích</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-slate-500 text-xs font-black uppercase tracking-wider mb-1">Quỹ khuyến học & Thiếu nhi</p>
                  <h3 className="text-2xl font-black text-slate-950">{formatCurrency(12800000)}</h3>
                  <div className="text-[10px] text-slate-400 mt-2">Tuyên dương học sinh xuất sắc, quà Trung thu, Tết thiếu nhi</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-slate-500 text-xs font-black uppercase tracking-wider mb-1">Quỹ an sinh & Phòng chống thiên tai</p>
                  <h3 className="text-2xl font-black text-slate-950">{formatCurrency(20200000)}</h3>
                  <div className="text-[10px] text-slate-400 mt-2">Ủng hộ bão lụt, hỗ trợ hoàn cảnh khó khăn đột xuất</div>
                </div>
              </div>

              {/* Transactions grid */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                  <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Nhật ký thu chi quỹ</h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center">Phân loại:</span>
                    {['All', 'Thu', 'Chi'].map((ty) => (
                      <button
                        key={ty}
                        onClick={() => setFinanceTypeFilter(ty)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${financeTypeFilter === ty ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                      >
                        {ty === 'All' ? 'Tất cả' : ty}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase text-slate-500">
                      <tr>
                        <th className="p-4 pl-6">Ngày Giao Dịch</th>
                        <th className="p-4">Loại</th>
                        <th className="p-4">Hạng Mục Quỹ</th>
                        <th className="p-4">Nội Dung Chi Tiết</th>
                        <th className="p-4 text-right">Số Tiền (VND)</th>
                        <th className="p-4 pr-6 text-right">Người thực hiện</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {finances
                        .filter(f => financeTypeFilter === 'All' || f.type === financeTypeFilter)
                        .map((f) => (
                          <tr key={f.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 pl-6 font-mono font-semibold text-slate-600">{f.date}</td>
                            <td className="p-4">
                              <span className={`inline-block font-black px-2 py-0.5 rounded text-[10px] uppercase ${f.type === 'Thu' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {f.type}
                              </span>
                            </td>
                            <td className="p-4 font-bold text-slate-700">{f.category}</td>
                            <td className="p-4 text-slate-600 max-w-sm font-medium">{f.description}</td>
                            <td className={`p-4 text-right font-bold text-sm ${f.type === 'Thu' ? 'text-green-600' : 'text-red-600'}`}>
                              {f.type === 'Thu' ? '+' : '-'}{formatCurrency(f.amount)}
                            </td>
                            <td className="p-4 pr-6 text-right text-slate-500 font-bold">{f.performer}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SỰ KIỆN & LỊCH HỌP */}
          {activeTab === 'events' && (
            <div id="view_events" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Lịch họp & Sự kiện Cộng đồng</h2>
                  <p className="text-xs text-slate-500 mt-1">Lịch sinh hoạt chi bộ, đoàn thể, họp tổ dân phố và phát động phong trào thi đua chung.</p>
                </div>
                <button onClick={() => setShowAddEvent(true)} className="flex items-center space-x-1.5 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 shadow-indigo-200">
                  <Plus size={14} />
                  <span>Lên lịch cuộc họp / sự kiện</span>
                </button>
              </div>

              {/* Event card layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((ev) => (
                  <div key={ev.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-indigo-400 transition-all">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${
                          ev.type === 'Họp dân' ? 'bg-indigo-100 text-indigo-700' :
                          ev.type === 'Y tế' ? 'bg-green-100 text-green-700' :
                          ev.type === 'Môi trường' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {ev.type}
                        </span>
                        <span className="text-xs text-indigo-600 font-black font-mono">{ev.date}</span>
                      </div>
                      
                      <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">{ev.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">{ev.description}</p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center"><Clock size={12} className="text-slate-400 mr-2 shrink-0" /> Thời gian: <strong>{ev.time}</strong></div>
                      <div className="flex items-center"><MapPin size={12} className="text-slate-400 mr-2 shrink-0" /> Địa điểm: <strong>{ev.location}</strong></div>
                      <div className="flex items-center"><User size={12} className="text-slate-400 mr-2 shrink-0" /> Chủ trì: <strong className="text-slate-700">{ev.host}</strong></div>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm('Bạn có chắc chắn muốn hủy sự kiện này?')) {
                          setEvents(events.filter(e => e.id !== ev.id));
                          showToast('Đã gỡ lịch sự kiện khỏi hệ thống');
                        }
                      }}
                      className="mt-4 text-left text-xs font-bold text-red-500 hover:text-red-700 block"
                    >
                      Hủy sự kiện
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Footer Area */}
      <footer id="app_footer" className="h-10 bg-slate-100 border-t border-slate-200 px-8 flex items-center justify-between text-[9px] text-slate-500 font-black uppercase tracking-widest shrink-0">
        <div>© 2026 BAN ĐIỀU HÀNH TỔ DÂN PHỐ 44 • PHƯỜNG DỊCH VỌNG HẬU</div>
        <div className="flex space-x-6">
          <span>PHIÊN BẢN 1.0.2 (MVP)</span>
          <span className="text-indigo-600">HỆ THỐNG ĐANG HOẠT ĐỘNG ỔN ĐỊNH</span>
        </div>
      </footer>

      {/* MODAL 1: ADD HOUSEHOLD */}
      {showAddHousehold && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 uppercase">Đăng ký Hộ khẩu Mới</h3>
              <button onClick={() => setShowAddHousehold(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddHousehold} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mã Hộ khẩu đuôi (HK-044-xxx)</label>
                <input
                  type="text"
                  placeholder="Ví dụ: 302, 119"
                  value={newHId}
                  onChange={(e) => setNewHId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-mono"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Họ tên Chủ Hộ</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Ông Hoàng Văn Thắng"
                  value={newHHead}
                  onChange={(e) => setNewHHead(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Số nhà / Căn hộ</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Căn 302"
                    value={newHAddress}
                    onChange={(e) => setNewHAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Cụm dân cư</label>
                  <select
                    value={newHCluster}
                    onChange={(e) => setNewHCluster(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                  >
                    <option>Cụm 1</option>
                    <option>Cụm 2</option>
                    <option>Cụm 3</option>
                    <option>Cụm 4</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <button type="button" onClick={() => setShowAddHousehold(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200">Hủy</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-sm">Đăng ký</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD MEMBER */}
      {showAddMember && selectedHousehold && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 uppercase">Thêm Nhân khẩu vào hộ</h3>
              <button onClick={() => setShowAddMember(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-500">Đang thêm thành viên cho hộ chủ hộ: <strong>{selectedHousehold.headName}</strong></p>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Họ tên thành viên</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn Hải"
                  value={newMName}
                  onChange={(e) => setNewMName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Ngày sinh</label>
                  <input
                    type="date"
                    value={newMDob}
                    onChange={(e) => setNewMDob(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Giới tính</label>
                  <select
                    value={newMGender}
                    onChange={(e) => setNewMGender(e.target.value as 'Nam' | 'Nữ')}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Quan hệ với chủ hộ</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Vợ, Con, Cháu..."
                    value={newMRelation}
                    onChange={(e) => setNewMRelation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nghề nghiệp</label>
                  <input
                    type="text"
                    placeholder="Kỹ sư, học sinh..."
                    value={newMOccupation}
                    onChange={(e) => setNewMOccupation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="Không bắt buộc"
                    value={newMPhone}
                    onChange={(e) => setNewMPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Số CCCD / CMND</label>
                  <input
                    type="text"
                    placeholder="Không bắt buộc"
                    value={newMCccd}
                    onChange={(e) => setNewMCccd(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-mono"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <button type="button" onClick={() => setShowAddMember(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200">Hủy</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700">Thêm nhân khẩu</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: ADD ANNOUNCEMENT */}
      {showAddAnnouncement && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 uppercase">Phát hành Thông báo mới</h3>
              <button onClick={() => setShowAddAnnouncement(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddAnnouncement} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tiêu đề thông báo</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Giấy mời họp toàn bộ đại diện tổ dân phố 44"
                  value={newATitle}
                  onChange={(e) => setNewATitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-950"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hạng mục</label>
                  <select
                    value={newACategory}
                    onChange={(e) => setNewACategory(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                  >
                    <option value="Họp tổ dân phố">Họp tổ dân phố</option>
                    <option value="Y tế">Y tế</option>
                    <option value="Cảnh báo">Cảnh báo</option>
                    <option value="Sự kiện">Sự kiện</option>
                    <option value="Thuế & Quỹ">Thuế & Quỹ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Độ khẩn cấp</label>
                  <select
                    value={newAPriority}
                    onChange={(e) => setNewAPriority(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                  >
                    <option value="Bình thường">Bình thường</option>
                    <option value="Quan trọng">Quan trọng</option>
                    <option value="Khẩn cấp">Khẩn cấp</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Thời gian (Tùy chọn)</label>
                  <input
                    type="text"
                    placeholder="19:30 - Thứ bảy này (25/07)"
                    value={newAEventTime}
                    onChange={(e) => setNewAEventTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Địa điểm (Tùy chọn)</label>
                  <input
                    type="text"
                    placeholder="Nhà văn hóa TDP 44"
                    value={newALocation}
                    onChange={(e) => setNewALocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Đối tượng nhận tin</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Toàn bộ hộ dân / Chỉ các gia đình có con nhỏ"
                  value={newATarget}
                  onChange={(e) => setNewATarget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nội dung chi tiết thông báo</label>
                <textarea
                  rows={4}
                  placeholder="Kính gửi bà con lối xóm, để chuẩn bị cho việc dọn dẹp..."
                  value={newAContent}
                  onChange={(e) => setNewAContent(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <button type="button" onClick={() => setShowAddAnnouncement(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200">Hủy</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-sm">Đăng thông báo</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: ADD COMPLAINT */}
      {showAddComplaint && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 uppercase">Gửi Phản ánh, Kiến nghị Dân cư</h3>
              <button onClick={() => setShowAddComplaint(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddComplaint} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Họ tên người gửi</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Ông Trần Tuấn"
                    value={newCSender}
                    onChange={(e) => setNewCSender(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Số điện thoại liên hệ</label>
                  <input
                    type="text"
                    placeholder="0912.xxx.xxx"
                    value={newCPhone}
                    onChange={(e) => setNewCPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Căn hộ / Số nhà</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Căn 115"
                    value={newCAddress}
                    onChange={(e) => setNewCAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Thuộc Cụm</label>
                  <select
                    value={newCCluster}
                    onChange={(e) => setNewCCluster(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                  >
                    <option>Cụm 1</option>
                    <option>Cụm 2</option>
                    <option>Cụm 3</option>
                    <option>Cụm 4</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hạng mục phản ánh</label>
                <select
                  value={newCCategory}
                  onChange={(e) => setNewCCategory(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                >
                  <option value="Cơ sở hạ tầng">Cơ sở hạ tầng (Đèn, đường, điện, nước)</option>
                  <option value="An ninh trật tự">An ninh trật tự (Tiếng ồn, trộm cắp, rác)</option>
                  <option value="Vệ sinh môi trường">Vệ sinh môi trường (Rác thải, ô nhiễm)</option>
                  <option value="Ý kiến đóng góp">Ý kiến đóng góp xây dựng tổ dân phố</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tiêu đề ý kiến phản ánh</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Rác thải vứt bừa bãi tại cổng lối ra"
                  value={newCTitle}
                  onChange={(e) => setNewCTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nội dung chi tiết kiến nghị</label>
                <textarea
                  rows={4}
                  placeholder="Kính đề nghị ban lãnh đạo can thiệp..."
                  value={newCContent}
                  onChange={(e) => setNewCContent(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <button type="button" onClick={() => setShowAddComplaint(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200">Hủy</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700">Gửi phản ánh</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: ADD FINANCE */}
      {showAddFinance && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 uppercase">Ghi nhận giao dịch Thu / Chi Quỹ</h3>
              <button onClick={() => setShowAddFinance(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddFinance} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Loại quỹ giao dịch</label>
                  <select
                    value={newFType}
                    onChange={(e) => setNewFType(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                  >
                    <option value="Thu">Khoản THU (+)</option>
                    <option value="Chi">Khoản CHI (-)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mục đích sử dụng quỹ</label>
                  <select
                    value={newFCategory}
                    onChange={(e) => setNewFCategory(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                  >
                    <option value="Quỹ hoạt động">Quỹ hoạt động</option>
                    <option value="Quỹ khuyến học">Quỹ khuyến học</option>
                    <option value="Quỹ đền ơn đáp nghĩa">Quỹ đền ơn</option>
                    <option value="Quỹ phòng chống thiên tai">Quỹ chống bão lụt</option>
                    <option value="Chi hoạt động">Chi thường xuyên</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Số tiền (VND)</label>
                <input
                  type="number"
                  placeholder="Nhập số tiền..."
                  value={newFAmount}
                  onChange={(e) => setNewFAmount(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-indigo-700"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mô tả giao dịch</label>
                <input
                  type="text"
                  placeholder="Lý do thu chi quỹ..."
                  value={newFDesc}
                  onChange={(e) => setNewFDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Người thực hiện</label>
                <input
                  type="text"
                  value={newFPerformer}
                  onChange={(e) => setNewFPerformer(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                />
              </div>
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <button type="button" onClick={() => setShowAddFinance(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200">Hủy</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700">Lưu biên lai</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 6: ADD EVENT */}
      {showAddEvent && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 uppercase">Thêm sự kiện / Lịch họp mới</h3>
              <button onClick={() => setShowAddEvent(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tên cuộc họp / Sự kiện</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Đại hội chi bộ Tổ dân phố"
                  value={newETitle}
                  onChange={(e) => setNewETitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Ngày tổ chức</label>
                  <input
                    type="date"
                    value={newEDate}
                    onChange={(e) => setNewEDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Giờ diễn ra</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 19:30 - 21:00"
                    value={newETime}
                    onChange={(e) => setNewETime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Địa điểm</label>
                  <input
                    type="text"
                    placeholder="Nhà văn hóa TDP"
                    value={newELocation}
                    onChange={(e) => setNewELocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Thể loại</label>
                  <select
                    value={newEType}
                    onChange={(e) => setNewEType(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-700"
                  >
                    <option value="Họp dân">Họp dân</option>
                    <option value="Văn nghệ">Văn nghệ / Thể thao</option>
                    <option value="Y tế">Y tế / Tiêm chủng</option>
                    <option value="Môi trường">Dọn vệ sinh môi trường</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Đơn vị chủ trì</label>
                  <input
                    type="text"
                    value={newEHost}
                    onChange={(e) => setNewEHost(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Thành phần tham gia</label>
                  <input
                    type="text"
                    value={newEExpected}
                    onChange={(e) => setNewEExpected(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nội dung tóm tắt</label>
                <textarea
                  rows={3}
                  placeholder="Kính mời toàn thể nhân dân đến đúng giờ..."
                  value={newEDesc}
                  onChange={(e) => setNewEDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs"
                />
              </div>
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <button type="button" onClick={() => setShowAddEvent(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200">Hủy</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700">Lưu sự kiện</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
