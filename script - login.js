
const hidddenElement = document.querySelectorAll('.hidden');





const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    }
    
    )
});
hidddenElement.forEach((el) => observer.observe(el));