# 1\. Tổng quan & Màu sắc

- Theme: Web có 1 theme dark
- Background color:
  - background: linear-gradient(0deg, #0C0C0E, #0C0C0E),linear-gradient(171.23deg, rgba(140, 248, 210, 0.08) 3.76%, rgba(12, 12, 14, 0.12) 42.56%, rgba(135, 245, 206, 0.4) 118.97%);
- Font chữ: Albert Sans
- Màu sắc:
  - Primary: gradient #87F5CE tới #41BDC7
  - secondary: Áp dụng cho nút "Learn More" ở phần Hero. Nút này có nền trong suốt, viền mỏng (outline) và chữ màu trắng/xám.
  - Text:
    - Các thẻ h1,h2,h3, h4: #FFFFFF
    - Các thẻ p, và nội dung các thẻ dưới phần footer để weight=400
  - Background: #0C0C0E

# 2\. Cấu trúc Font chữ & Cỡ chữ

## Header

- Community/docs:
  - font-family: Albert Sans;
  - font-weight: 500;
  - font-style: Medium;
  - font-size: 16px;
  - leading-trim: NONE;
  - line-height: 100%;
  - letter-spacing: 0%;

## Pages

- Hero:
  - H1: "Automating Liquidity Amplifying Yield on Aptos"
    - font-family: Albert Sans; font-weight: 700; font-style: Bold; font-size: 64px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%;
  - p: "Smart Liquidity Provision on Aptos - Adaptive on-chain liquidity that maximizes yield and minimizes risk"
    - font-family: Albert Sans; font-weight: 400; font-style: Regular; font-size: 24px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%;
- Explore The Strategy:
  - h2: "Explore The Strategy"
    - font-family: Albert Sans; font-weight: 700; font-style: Bold; font-size: 40px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%; text-align: center;
  - p: "Luxor is the Liquidity Management Protocol on Aptos, enabling LPs to maximize capital efficiency..."
    - font-family: Albert Sans; font-weight: 400; font-style: Regular; font-size: 20px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%; text-align: center;
  - h3: "Dual-Position Management", "Automation Modules", "Simulation-Based Backtesting"
    - font-family: Albert Sans; font-weight: 700; font-style: Bold; font-size: 28px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%; text-align: center;
- User Benefits:
  - h2: "User Benefits"
  - h3: "Higher, More Stable Returns", "Zero Manual Management", "Reduced Impermanent Loss", "Data-Driven Decisions".
  - p: nội dung của mỗi thẻ
    - font-family: Albert Sans; font-weight: 400; font-style: Regular; font-size: 20px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%;
- Smart Liquidity, Simple Steps:
  - h2: "Smart Liquidity, Simple Steps"
  - h3: "Create Position & Deposit", "Auto - manage", "Earn Fees"
  - p: nội dung của mỗi thẻ
    - font-family: Albert Sans; font-weight: 400; font-style: Regular; font-size: 16px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%;
- The Smartest Way to Deploy Liquidity:
  - h2: The Smartest Way to Deploy Liquidity
  - p: "Unlock optimized, automated, and intelligent liquidity"
    - font-family: Albert Sans; font-weight: 400; font-style: Regular; font-size: 32px;
    - leading-trim: NONE; line-height: 100%; letter-spacing: 0%; text-align: center;

## Footer

- H4: COMMUNITY Documentation Security
  - font-family: Albert Sans; font-weight: 700; font-style: Bold; font-size: 16px;
  - leading-trim: NONE; line-height: 24px; letter-spacing: -0.2px; text-align: center;
- p: Các nội dung bên dưới mỗi thẻ:
  - font-family: Albert Sans; font-weight: 400; font-style: Regular; font-size: 14px;
  - leading-trim: NONE; line-height: 20px; letter-spacing: 0%; text-align: center;

# 3\. Layout & Phân chia thành phần

- Chiều rộng max của content: 1440px
- Layout chia 3 phần:
  - Header: gồm có thanh navbar làm component chính
  - Page: gồm có 5 mảng to gồm hero page, "Explore The Strategy", "User Benefits", "Smart Liquidity, Simple Steps" và "The Smartest Way to Deploy Liquidity"
  - Footer: gồm có logo và các các mục COMMUNITY Documentation Security

## Biến Layout (Layout Variables)

- header-height: 80px;
- sidebar-width: 300px; (Chiều rộng tiêu chuẩn áp dụng cho mobile menu/sidebar)

## Phân cấp Z-index (Z-index Hierarchy)

- \--z-index-max: 100; (Biến cơ sở đặt z-index cao nhất cho các thành phần layout tĩnh)
- Header (Navbar): z-index: var(--z-index-max); (Giá trị: 100 - Cao nhất trong bố cục desktop để luôn nổi lên khi cuộn trang)
- Mobile Submenu / Sidebar: z-index: calc(var(--z-index-max) + 10); (Giá trị: 110 - Cao hơn z-index của Header để đè lên thanh điều hướng khi mở menu trên điện thoại)
- Page Content (5 mảng): z-index: 1; (Thấp hơn Header, giúp nội dung trượt dưới thanh điều hướng)
- Background Elements: z-index: 0; (Hoặc -1, đảm bảo luôn nằm dưới cùng và không cản trở tương tác)
- Footer: z-index: 1; (Ngang hàng với các khối nội dung của Page)

# 4\. Các phần tử tái sử dụng

## 1\. Nút bấm (Buttons)

- Primary Button (Nút chính - Nổi bật): Nút có nền màu xanh mint/gradient, chữ đen.
  - _Vị trí:_ "Launch App" (Header), "Enter App" (Hero section), "Enter App" (Phần cuối).
- Secondary Button (Nút phụ): Nút có nền trong suốt, viền mỏng (outline), chữ màu trắng/xám.
  - _Vị trí:_ "Learn More" (Hero section).

## 2\. Các Thẻ nội dung (Cards)

- Base Card: Nền tối màu, bo góc, có thể có viền sáng mờ.
- Feature Card (Thẻ Icon + Text): Gồm Icon trong vòng tròn ở trên và Tiêu đề (H3, 28px, Bold) ở dưới.
  - _Vị trí:_ 3 thẻ ở phần "Explore The Strategy".
- Benefit Card (Thẻ Tiêu đề màu + Text): Gồm Tiêu đề (H3) nổi bật màu xanh lá và mô tả ngắn (p, 20px, Regular).
  - _Vị trí:_ 4 thẻ ở phần "User Benefits".
- Step Card (Thẻ Đánh số + Text): Gồm số thứ tự cỡ lớn màu xanh mint, Tiêu đề (H3) và mô tả (p, 16px, Regular).
  - _Vị trí:_ 3 thẻ ở phần "Smart Liquidity, Simple Steps".