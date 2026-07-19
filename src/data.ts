export interface Resident {
  id: string;
  name: string;
  dob: string;
  gender: 'Nam' | 'Nữ';
  relation: string; // Chủ hộ, Vợ, Con, Cháu, v.v.
  phone?: string;
  cccd?: string; // ID Card
  occupation?: string;
}

export interface Household {
  id: string;
  householdId: string; // Mã hộ khẩu e.g. HK-044-001
  headName: string;
  address: string; // Căn hộ/Số nhà
  cluster: string; // Cụm 1, 2, 3, 4
  memberCount: number;
  members: Resident[];
  verified: boolean;
  registrationDate: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'Họp tổ dân phố' | 'Y tế' | 'Cảnh báo' | 'Sự kiện' | 'Thuế & Quỹ';
  timestamp: string;
  author: string;
  priority: 'Bình thường' | 'Quan trọng' | 'Khẩn cấp';
  targetAudience: string;
  location?: string;
  eventTime?: string;
}

export interface Complaint {
  id: string;
  senderName: string;
  senderAddress: string;
  senderCluster: string;
  phone: string;
  title: string;
  content: string;
  category: 'Cơ sở hạ tầng' | 'An ninh trật tự' | 'Vệ sinh môi trường' | 'Ý kiến đóng góp';
  status: 'Mới nhận' | 'Đang xử lý' | 'Đã xong';
  date: string;
  response?: string;
  responseDate?: string;
}

export interface FinanceTransaction {
  id: string;
  date: string;
  type: 'Thu' | 'Chi';
  category: 'Quỹ hoạt động' | 'Quỹ khuyến học' | 'Quỹ đền ơn đáp nghĩa' | 'Quỹ phòng chống thiên tai' | 'Chi hoạt động';
  amount: number; // in VND
  description: string;
  performer: string; // Người thực hiện
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  location: string;
  type: 'Họp dân' | 'Văn nghệ' | 'Y tế' | 'Môi trường';
  host: string;
  expectedAttendees: string;
}

export const INITIAL_HOUSEHOLDS: Household[] = [];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [];

export const INITIAL_COMPLAINTS: Complaint[] = [];

export const INITIAL_FINANCES: FinanceTransaction[] = [];

export const INITIAL_EVENTS: CommunityEvent[] = [];
