const popup=document.querySelector(".popup");
const burger=document.querySelector("#burger");
const nav_item=document.querySelectorAll(".nav-item");

let hide=true;

setTimeout (function show_popup(){
    popup.classList.remove("hide-popup");
},3000);


function closePopup(){
    popup.classList.add("hide-popup");
}
popup.addEventListener("click",closePopup);

function menu(){
    if(hide)
    {
    for(let item of nav_item){
        item.classList.add("nav-item-show");
    }
    hide=false;
    }else{
        for(let item of nav_item){
            item.classList.remove("nav-item-show");
        }
        hide=true;
    }
}

burger.addEventListener("click",menu);


//comments

const commentList=[
   { name:"حسنعلی",
    content:"واقعاً تجربه غذا خوردن در رستوران بنفش بی‌نظیر بود. هم کیفیت غذا عالی بود هم برخورد پرسنل خیلی حرفه‌ای بود",
    image:"unknown.jpg",
   },
    {name:"فرامرز",
    content:"من عاشق فضای گرم و دلنشین این رستوران شدم. طعم پیتزاهاش عالیه. حتماً دوباره میام",
    image:"unknown.jpg",
    },
    {name:"کاظم",
    content:"اولین باره اینجا میام ولی قطعاً آخرین بار نیست. نوشیدنی‌های مخصوصشون فوق‌العاده‌س!",
    image:"unknown.jpg",
    },
    {
        name:"مجید",
        content:"محیطی تمیز و غذاهایی با کیفیت. به دوستانم هم پیشنهاد دادم بیان و لذت ببرن",
        image:"unknown.jpg",
    },
    {
        name:"وحید",
        content:"سفارش آنلاین داشتم. سریع، گرم و با بسته‌بندی عالی بهم تحویل دادن. راضی‌ام.",
        image:"unknown.jpg",
    },
    {
        name:"سمیه",
        content:" رستوران بنفش یکی از بهترین تجربه‌های من از بیرون غذا خوردنه. حتما امتحانش کنید!",
        image:"unknown.jpg",
    },
];

const result_comment=commentList.map(function(comment){
    return `<figure class="Comment-item">
<img src="./Styles/images/${comment.image}" class="Comment-item-image" alt="${comment.name}">
<figcaption class="Comment-item-text">
<h3>${comment.name}</h3>
<p>${comment.content}</p>
</figcaption>
        </figure>`;
}).join("");

const commentItemsDiv=document.querySelector("#Comment-items");

commentItemsDiv.innerHTML=result_comment;

const comments=document.querySelectorAll(".Comment-item");

const observer=new IntersectionObserver(function(items){
    for(const item of items){
        if(item.isIntersecting == true){
            item.target.classList.add("Comment-item-animation");
        }else{
            item.target.classList.remove("Comment-item-animation");

        }
    }
}, {threshold:0.001});

for(const comment of comments){
    observer.observe(comment);
}
