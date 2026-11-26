const services = [
 {id:"food",cat:"food",icon:"🍲",tag:"ẨM THỰC",name:"Bữa cơm nhà & món vườn",desc:"Thưởng thức rau trái theo mùa và món ăn địa phương tại không gian Long Đạt Ma.",price:"Liên hệ báo giá"},
 {id:"bbq",cat:"food",icon:"🔥",tag:"ẨM THỰC",name:"BBQ & hải sản",desc:"Bữa tiệc nướng thân mật, phù hợp nhóm bạn và gia đình.",price:"Theo set / số người"},
 {id:"motorbike",cat:"transport",icon:"🛵",tag:"DI CHUYỂN",name:"Thuê xe máy",desc:"Chủ động khám phá Hồ Tràm và các điểm đến lân cận.",price:"Từ 100.000đ / ngày"},
 {id:"bicycle",cat:"transport",icon:"🚲",tag:"DI CHUYỂN",name:"Thuê xe đạp",desc:"Đạp xe qua đường làng, cánh đồng và cung đường ven biển.",price:"Liên hệ báo giá"},
 {id:"camping",cat:"nature",icon:"⛺",tag:"THIÊN NHIÊN",name:"Camping sân vườn",desc:"Cắm trại giữa khu vườn xanh, tận hưởng buổi tối ngoài trời.",price:"Liên hệ báo giá"},
 {id:"fishing",cat:"nature",icon:"🎣",tag:"THIÊN NHIÊN",name:"Câu cá & trải nghiệm vườn",desc:"Tham quan vườn, thu hoạch rau trái và trải nghiệm câu cá.",price:"Liên hệ báo giá"},
 {id:"sup",cat:"beach",icon:"🏄",tag:"BIỂN & THỂ THAO",name:"SUP & hoạt động biển",desc:"Trải nghiệm mặt nước và khám phá bờ biển cùng đơn vị địa phương.",price:"Theo buổi"},
 {id:"surf",cat:"beach",icon:"🌊",tag:"BIỂN & THỂ THAO",name:"Surfing & skimboard",desc:"Kết nối lớp trải nghiệm hoặc thuê dụng cụ theo điều kiện biển.",price:"Liên hệ báo giá"},
 {id:"skate",cat:"sport",icon:"🛼",tag:"THỂ THAO",name:"Skate & roller experience",desc:"Làm quen patin, longboard và các hoạt động trên bánh xe.",price:"Theo buổi"},
 {id:"tailor",cat:"craft",icon:"🧵",tag:"THỦ CÔNG",name:"May đo & chỉnh sửa",desc:"Kết nối thợ may địa phương, sửa đồ và đặt sản phẩm theo yêu cầu.",price:"Báo giá theo mẫu"},
 {id:"craft",cat:"craft",icon:"📿",tag:"THỦ CÔNG",name:"Workshop thủ công",desc:"Tự tay làm vòng hạt, đồ lưu niệm và sản phẩm handmade.",price:"Theo workshop"},
 {id:"wellness",cat:"wellness",icon:"🧘",tag:"THƯ GIÃN",name:"Yoga & thiền",desc:"Khoảng thời gian thư giãn, vận động nhẹ và cân bằng tinh thần.",price:"Theo buổi"}
];
const categories=[["all","Tất cả"],["food","Ẩm thực"],["transport","Di chuyển"],["nature","Thiên nhiên"],["beach","Biển"],["sport","Thể thao"],["craft","Thủ công"],["wellness","Thư giãn"]];
let active="all";
const grid=document.querySelector("#serviceGrid"), filters=document.querySelector("#filters"), search=document.querySelector("#search");
function renderFilters(){filters.innerHTML=categories.map(([id,label])=>`<button class="filter ${active===id?"active":""}" data-cat="${id}">${label}</button>`).join("");}
function render(){const q=search.value.trim().toLowerCase();const shown=services.filter(s=>(active==="all"||s.cat===active)&&`${s.name} ${s.desc} ${s.tag}`.toLowerCase().includes(q));grid.innerHTML=shown.map(s=>`<article class="service"><div class="service-top"><span class="service-icon">${s.icon}</span><span class="service-tag">${s.tag}</span></div><h3>${s.name}</h3><p>${s.desc}</p><div class="service-bottom"><span class="price">${s.price}</span><button class="book-link" data-book="${s.id}">ĐẶT NGAY ↗</button></div></article>`).join("");document.querySelector("#empty").classList.toggle("hidden",shown.length>0);}
filters.addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(!b)return;active=b.dataset.cat;renderFilters();render();});
search.addEventListener("input",render);renderFilters();render();
const modal=document.querySelector("#bookingModal");
function openBooking(id){const s=services.find(x=>x.id===id);if(!s)return;document.querySelector("#serviceId").value=id;document.querySelector("#modalTitle").textContent=s.name;document.querySelector("#modalDesc").textContent=s.desc+" · "+s.price;modal.classList.remove("hidden");document.body.style.overflow="hidden";}
function closeBooking(){modal.classList.add("hidden");document.body.style.overflow="";}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-book]");if(b)openBooking(b.dataset.book);});
document.querySelector("#closeModal").addEventListener("click",closeBooking);
modal.addEventListener("click",e=>{if(e.target===modal)closeBooking();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeBooking();});
document.querySelector("#bookingForm").addEventListener("submit",e=>{e.preventDefault();const s=services.find(x=>x.id===document.querySelector("#serviceId").value);const date=document.querySelector("#date").value;const msg=[`Xin chào ${window.LDM_CONFIG.businessName}, tôi muốn hỏi đặt dịch vụ: ${s.name}`,`Họ tên: ${document.querySelector("#guestName").value}`,`Ngày: ${date}`,`Giờ: ${document.querySelector("#time").value||"Linh hoạt"}`,`Số người: ${document.querySelector("#people").value}`,`Ghi chú: ${document.querySelector("#note").value||"Không có"}`].join("\n");const phone=window.LDM_CONFIG.whatsappNumber;if(phone){window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank","noopener");}else if(navigator.clipboard){navigator.clipboard.writeText(msg).then(()=>alert("Đã sao chép yêu cầu đặt dịch vụ. Hãy gửi nội dung này cho Long Đạt Ma để xác nhận."));}else{prompt("Sao chép yêu cầu đặt dịch vụ:",msg);}closeBooking();});
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
