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

export const INITIAL_HOUSEHOLDS: Household[] = [
  {
    id: 'H1',
    householdId: 'HK-044-115',
    headName: 'Bà Lê Thị Hồng',
    address: 'Căn 115',
    cluster: 'Cụm 2',
    memberCount: 3,
    verified: true,
    registrationDate: '2018-05-12',
    members: [
      { id: 'R1_1', name: 'Lê Thị Hồng', dob: '1962-08-15', gender: 'Nữ', relation: 'Chủ hộ', phone: '0912.345.678', cccd: '001162000234', occupation: 'Hưu trí' },
      { id: 'R1_2', name: 'Trần Minh Hải', dob: '1988-11-20', gender: 'Nam', relation: 'Con', phone: '0988.777.888', cccd: '001088000456', occupation: 'Kỹ sư phần mềm' },
      { id: 'R1_3', name: 'Phạm Quỳnh Chi', dob: '1992-04-05', gender: 'Nữ', relation: 'Con dâu', phone: '0976.111.222', cccd: '001092000890', occupation: 'Kế toán' }
    ]
  },
  {
    id: 'H2',
    householdId: 'HK-044-402',
    headName: 'Ông Nguyễn Khắc Hùng',
    address: 'Căn 402',
    cluster: 'Cụm 1',
    memberCount: 4,
    verified: true,
    registrationDate: '2019-10-01',
    members: [
      { id: 'R2_1', name: 'Nguyễn Khắc Hùng', dob: '1958-03-22', gender: 'Nam', relation: 'Chủ hộ', phone: '0903.111.222', cccd: '001158000123', occupation: 'Hưu trí' },
      { id: 'R2_2', name: 'Nguyễn Thị Minh', dob: '1960-07-18', gender: 'Nữ', relation: 'Vợ', phone: '0912.222.333', cccd: '001160000789', occupation: 'Hưu trí' },
      { id: 'R2_3', name: 'Nguyễn Khắc Nam', dob: '1985-09-12', gender: 'Nam', relation: 'Con', phone: '0934.444.555', cccd: '001085000999', occupation: 'Kinh doanh' },
      { id: 'R2_4', name: 'Nguyễn Minh Anh', dob: '2015-05-15', gender: 'Nữ', relation: 'Cháu nội', occupation: 'Học sinh' }
    ]
  },
  {
    id: 'H3',
    householdId: 'HK-044-608',
    headName: 'Anh Trần Tuấn',
    address: 'Căn 608',
    cluster: 'Cụm 4',
    memberCount: 2,
    verified: true,
    registrationDate: '2021-02-14',
    members: [
      { id: 'R3_1', name: 'Trần Tuấn', dob: '1990-05-30', gender: 'Nam', relation: 'Chủ hộ', phone: '0945.888.999', cccd: '001090000124', occupation: 'Kiến trúc sư' },
      { id: 'R3_2', name: 'Lê Thùy Dương', dob: '1993-10-14', gender: 'Nữ', relation: 'Vợ', phone: '0963.222.111', cccd: '001093000567', occupation: 'Giáo viên' }
    ]
  },
  {
    id: 'H4',
    householdId: 'HK-044-205',
    headName: 'Bà Phạm Thị Tuyết',
    address: 'Căn 205',
    cluster: 'Cụm 2',
    memberCount: 5,
    verified: true,
    registrationDate: '2015-08-25',
    members: [
      { id: 'R4_1', name: 'Phạm Thị Tuyết', dob: '1950-12-01', gender: 'Nữ', relation: 'Chủ hộ', phone: '0904.777.666', occupation: 'Hưu trí' },
      { id: 'R4_2', name: 'Trương Quốc Anh', dob: '1975-04-10', gender: 'Nam', relation: 'Con', phone: '0912.888.444', cccd: '001075000456', occupation: 'Công chức' },
      { id: 'R4_3', name: 'Vũ Thị Thanh', dob: '1978-08-22', gender: 'Nữ', relation: 'Con dâu', phone: '0915.999.333', cccd: '001078000123', occupation: 'Giảng viên' },
      { id: 'R4_4', name: 'Trương Minh Khôi', dob: '2005-10-11', gender: 'Nam', relation: 'Cháu', occupation: 'Sinh viên' },
      { id: 'R4_5', name: 'Trương Khánh Linh', dob: '2010-02-28', gender: 'Nữ', relation: 'Cháu', occupation: 'Học sinh' }
    ]
  },
  {
    id: 'H5',
    householdId: 'HK-044-302',
    headName: 'Anh Hoàng Văn Thắng',
    address: 'Căn 302',
    cluster: 'Cụm 3',
    memberCount: 3,
    verified: false,
    registrationDate: '2024-07-01',
    members: [
      { id: 'R5_1', name: 'Hoàng Văn Thắng', dob: '1995-01-20', gender: 'Nam', relation: 'Chủ hộ', phone: '0977.333.444', cccd: '001095000789', occupation: 'Nhân viên ngân hàng' },
      { id: 'R5_2', name: 'Nguyễn Hoài Thương', dob: '1997-06-18', gender: 'Nữ', relation: 'Vợ', phone: '0981.222.555', cccd: '001097000123', occupation: 'Bác sĩ' },
      { id: 'R5_3', name: 'Hoàng Minh Khang', dob: '2023-11-02', gender: 'Nam', relation: 'Con', occupation: 'Trẻ em' }
    ]
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'A1',
    title: 'Mời họp bình xét Gia đình Văn hóa năm 2024',
    content: 'Kính mời đại diện các hộ gia đình đến tham dự buổi họp tại Nhà văn hóa Tổ dân phố để tiến hành rà soát, bình xét danh hiệu Gia đình Văn hóa năm 2024 và thảo luận về phương hướng hoạt động năm tới.',
    category: 'Họp tổ dân phố',
    timestamp: '2 giờ trước',
    author: 'Nguyễn Văn An',
    priority: 'Quan trọng',
    targetAudience: 'Toàn bộ đại diện hộ dân',
    location: 'Nhà văn hóa Tổ dân phố 44',
    eventTime: '19:30 - Thứ Bảy này (25/07/2026)'
  },
  {
    id: 'A2',
    title: 'Lịch tiêm chủng mở rộng cho trẻ em tháng 11',
    content: 'Thông báo về địa điểm và thời gian tiêm phòng định kỳ các vắc-xin cơ bản cho trẻ dưới 3 tuổi. Đề nghị các phụ huynh mang theo sổ tiêm chủng cá nhân của trẻ khi đi.',
    category: 'Y tế',
    timestamp: 'Hôm qua',
    author: 'Trạm Y tế Phường',
    priority: 'Bình thường',
    targetAudience: 'Các gia đình có trẻ dưới 3 tuổi',
    location: 'Trạm Y tế Phường Dịch Vọng Hậu',
    eventTime: '08:00 - 11:30, Ngày 28/07/2026'
  },
  {
    id: 'A3',
    title: 'Tạm ngừng cấp nước khu vực Cụm 3 để bảo trì',
    content: 'Để phục vụ công tác bảo trì, súc xả đường ống cấp nước định kỳ của Công ty nước sạch, khu vực Cụm 3 sẽ tạm ngừng cấp nước. Đề nghị các hộ dân chủ động tích trữ nước dùng sinh hoạt.',
    category: 'Cảnh báo',
    timestamp: '2 ngày trước',
    author: 'Ban Quản trị Công trình',
    priority: 'Khẩn cấp',
    targetAudience: 'Toàn bộ hộ dân Cụm 3',
    location: 'Khu vực Cụm 3',
    eventTime: '23:00 Ngày 23/07/2026 đến 05:00 Ngày 24/07/2026'
  },
  {
    id: 'A4',
    title: 'Phát động phong trào Ngày hội dọn vệ sinh khu phố',
    content: 'Hưởng ứng phong trào "Xanh - Sạch - Đẹp" của phường, Ban điều hành Tổ dân phố phát động đợt tổng vệ sinh ngõ ngách, khuôn viên chung và bóc xóa quảng cáo bẩn trên tường công cộng.',
    category: 'Sự kiện',
    timestamp: '4 ngày trước',
    author: 'Đoàn Thanh niên',
    priority: 'Bình thường',
    targetAudience: 'Toàn thể nhân dân trong tổ',
    location: 'Toàn khu dân cư 44',
    eventTime: '07:30 - Chủ Nhật (26/07/2026)'
  }
];

export const INITIAL_COMPLAINTS: Complaint[] = [
  {
    id: 'C1',
    senderName: 'Ông Nguyễn Khắc Hùng',
    senderAddress: 'Căn 402',
    senderCluster: 'Cụm 1',
    phone: '0903.111.222',
    title: 'Bóng đèn đường ngõ 44/2 bị hỏng gây mất an toàn',
    content: 'Bóng đèn chiếu sáng công cộng tại ngõ 44/2 đã bị cháy hơn một tuần nay, ngõ rất tối vào ban đêm gây nguy hiểm cho người già và trẻ nhỏ di chuyển, đồng thời tiềm ẩn nguy cơ mất an ninh trật tự. Kính mong Ban điều hành sớm liên hệ đơn vị chiếu sáng đô thị thay thế.',
    category: 'Cơ sở hạ tầng',
    status: 'Mới nhận',
    date: '2026-07-18'
  },
  {
    id: 'C2',
    senderName: 'Bà Lê Thị Hồng',
    senderAddress: 'Căn 115',
    senderCluster: 'Cụm 2',
    phone: '0912.345.678',
    title: 'Phản ánh về tiếng ồn từ công trình cải tạo tầng 5',
    content: 'Căn hộ tầng trên tiến hành sửa chữa nhà, khoan đục bê tông liên tục ngoài giờ quy định (vào buổi trưa từ 12:00 đến 13:30 và tối sau 21:00) làm ảnh hưởng nghiêm trọng đến giờ giấc nghỉ ngơi của người cao tuổi và trẻ nhỏ xung quanh. Đề nghị ban quản lý có ý kiến nhắc nhở.',
    category: 'An ninh trật tự',
    status: 'Đang xử lý',
    date: '2026-07-16',
    response: 'Tổ dân phố đã cử đại diện đến căn hộ nhắc nhở chủ nhà và thợ thi công. Chủ nhà cam kết sẽ chỉ thi công trong khung giờ quy định: Sáng 8:00 - 11:30, Chiều 14:00 - 17:30.',
    responseDate: '2026-07-17'
  },
  {
    id: 'C3',
    senderName: 'Anh Trần Tuấn',
    senderAddress: 'Căn 608',
    senderCluster: 'Cụm 4',
    phone: '0945.888.999',
    title: 'Đề xuất lắp đặt thêm sọt rác công cộng tại khu vui chơi',
    content: 'Tại khu vực sân chơi chung của trẻ em, lượng rác thải từ chai nước, túi bóng rất nhiều nhưng hiện chỉ có 1 thùng rác nhỏ thường xuyên bị quá tải. Đề xuất tổ dân phố trích quỹ mua thêm 2 sọt rác công cộng đặt ở hai góc sân chơi để giữ gìn vệ sinh chung.',
    category: 'Vệ sinh môi trường',
    status: 'Đã xong',
    date: '2026-07-15',
    response: 'Đã duyệt đề xuất. Tổ dân phố đã trích quỹ công ích mua bổ sung 02 thùng rác nắp lật dung tích 60L và bàn giao cho chi hội cựu chiến binh theo dõi quản lý tại sân chơi chung.',
    responseDate: '2026-07-16'
  }
];

export const INITIAL_FINANCES: FinanceTransaction[] = [
  {
    id: 'F1',
    date: '2026-07-15',
    type: 'Thu',
    category: 'Quỹ hoạt động',
    amount: 15400000,
    description: 'Thu quỹ đóng góp tự nguyện đợt 1 năm 2026 của các hộ dân cụm 1 & cụm 2',
    performer: 'Nguyễn Thị Minh (Thủ quỹ)'
  },
  {
    id: 'F2',
    date: '2026-07-16',
    type: 'Chi',
    category: 'Chi hoạt động',
    amount: 600000,
    description: 'Mua bổ sung 02 thùng rác công cộng đặt tại khu vực sân chơi chung',
    performer: 'Lê Thị Hồng'
  },
  {
    id: 'F3',
    date: '2026-07-17',
    type: 'Thu',
    category: 'Quỹ khuyến học',
    amount: 12000000,
    description: 'Nhận tài trợ từ doanh nghiệp địa phương ủng hộ quỹ khuyến học hè 2026',
    performer: 'Nguyễn Văn An'
  },
  {
    id: 'F4',
    date: '2026-07-18',
    type: 'Chi',
    category: 'Chi hoạt động',
    amount: 1800000,
    description: 'Chi hỗ trợ gia đình hoàn cảnh khó khăn tại cụm 4 bị ảnh hưởng bởi giông lốc',
    performer: 'Nguyễn Văn An'
  },
  {
    id: 'F5',
    date: '2026-07-19',
    type: 'Thu',
    category: 'Quỹ phòng chống thiên tai',
    amount: 20200000,
    description: 'Thu đóng góp Quỹ phòng chống thiên tai năm 2026 của toàn bộ 4 cụm dân cư',
    performer: 'Nguyễn Thị Minh (Thủ quỹ)'
  }
];

export const INITIAL_EVENTS: CommunityEvent[] = [
  {
    id: 'E1',
    title: 'Họp bình xét Gia đình Văn hóa 2024',
    description: 'Họp toàn thể đại diện hộ dân để đánh giá, bình bầu gia đình văn hóa tiêu biểu và lấy ý kiến biểu quyết sửa đổi quy chế khu phố.',
    time: '19:30 - 21:30',
    date: '2026-07-25',
    location: 'Nhà văn hóa Tổ dân phố 44',
    type: 'Họp dân',
    host: 'Nguyễn Văn An (Tổ trưởng)',
    expectedAttendees: 'Đại diện 100+ hộ dân'
  },
  {
    id: 'E2',
    title: 'Ngày hội dọn vệ sinh chung & bóc xóa quảng cáo bẩn',
    description: 'Toàn dân ra quân dọn dẹp các tuyến ngõ, cắt tỉa cây xanh che khuất tầm nhìn, bóc xóa các biển quảng cáo, rao vặt trái phép.',
    time: '07:30 - 10:30',
    date: '2026-07-26',
    location: 'Các ngõ ngách Tổ dân phố 44',
    type: 'Môi trường',
    host: 'Đoàn Thanh niên & Hội phụ nữ',
    expectedAttendees: 'Toàn thể nhân dân hưởng ứng'
  },
  {
    id: 'E3',
    title: 'Tiêm chủng vắc-xin mở rộng tháng 7',
    description: 'Chương trình tiêm chủng quốc gia phòng chống các bệnh truyền nhiễm cơ bản cho trẻ nhỏ.',
    time: '08:00 - 11:30',
    date: '2026-07-28',
    location: 'Trạm Y tế phường Dịch Vọng Hậu',
    type: 'Y tế',
    host: 'Cán bộ Y tế phường',
    expectedAttendees: 'Trẻ em dưới 3 tuổi'
  }
];
