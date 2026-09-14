const cart=new Map();
const body=document.querySelector("#cart tbody");
const search=document.querySelector("#search");
const statusEl=document.querySelector("#scannerStatus");
const payment=document.querySelector("#payment");
function money(n){return Number(n||0).toFixed(2)+" EGP"}
function addProduct(b){
  const id=b.dataset.id, stock=Number(b.dataset.stock), price=Number(b.dataset.price);
  if(!Number.isFinite(stock)||!Number.isFinite(price)) return;
  if(cart.has(id)) cart.get(id).qty=Math.min(cart.get(id).qty+1,stock);
  else cart.set(id,{id:Number(id),name:b.dataset.name,sku:b.dataset.sku||"",price,stock,qty:1});
  render();
  search.value=""; filterProducts(""); search.focus();
}
function render(){
  body.innerHTML=""; let sub=0, count=0;
  cart.forEach((p,id)=>{const t=p.qty*p.price;sub+=t;count+=p.qty;body.innerHTML+=`<tr><td><b>${p.name}</b><small>${p.sku}</small></td><td><input data-q="${id}" type="number" min=".01" max="${p.stock}" step=".01" value="${p.qty}"></td><td>${money(t)}</td><td><button class="btn" data-r="${id}" type="button">×</button></td></tr>`});
  const d=Math.max(0,Number(document.getElementById("discount").value)||0), total=Math.max(0,sub-d), paid=Math.max(0,Number(document.getElementById("paid").value)||0);
  document.getElementById("total").textContent=money(total); document.getElementById("change").textContent=money(Math.max(0,paid-total)); document.getElementById("itemCount").textContent=count+" "+(count===1?"item":"items");
}
function filterProducts(q){q=(q||"").toLowerCase().trim();document.querySelectorAll(".product").forEach(b=>b.style.display=b.innerText.toLowerCase().includes(q)?"":"none")}
function exactProduct(q){q=q.trim().toLowerCase();if(!q)return null;for(const b of document.querySelectorAll(".product")){if((b.dataset.barcode||"").toLowerCase()===q||(b.dataset.sku||"").toLowerCase()===q)return b}return null}
document.querySelectorAll(".product").forEach(b=>b.onclick=()=>addProduct(b));
search.oninput=e=>{const exact=exactProduct(e.target.value);if(exact&&e.target.value.trim().length>=4){statusEl.textContent="✓ Scanner: "+(langIsArabic?"تم العثور على المنتج":"Product found")}filterProducts(e.target.value)};
search.onkeydown=e=>{if(e.key!=="Enter")return;e.preventDefault();const b=exactProduct(search.value);if(b){addProduct(b);statusEl.textContent="✓ Scanner: "+(langIsArabic?"تمت الإضافة":"Added");}else{const visible=[...document.querySelectorAll(".product")].filter(x=>x.style.display!=="none");if(visible.length===1)addProduct(visible[0]);else alert("Product / Barcode not found");}};
document.getElementById("clearSearch").onclick=()=>{search.value="";filterProducts("");search.focus()};
body.onclick=e=>{if(e.target.dataset.r){cart.delete(e.target.dataset.r);render();search.focus()}};
body.oninput=e=>{if(e.target.dataset.q){const p=cart.get(e.target.dataset.q);p.qty=Math.min(Math.max(Number(e.target.value)||.01,.01),p.stock);render()}};
document.getElementById("discount").oninput=render;document.getElementById("paid").oninput=render;payment.onchange=render;
document.getElementById("sell").onclick=async()=>{if(!cart.size)return alert("Cart is empty");try{const r=await fetch("api/sale.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({csrf:window.CSRF,items:[...cart.values()].map(p=>({id:p.id,qty:p.qty})),discount:Number(document.getElementById("discount").value)||0,paid:Number(document.getElementById("paid").value)||0,payment:payment.value})});const x=await r.json();if(!x.ok)throw Error(x.error);const w=window.open("receipt.php?id="+x.id,"receipt","width=420,height=760");if(!w)alert("Allow pop-ups to print the receipt.");setTimeout(()=>location.reload(),700)}catch(e){alert(e.message)}};
const langIsArabic=document.documentElement.lang==="ar";render();
