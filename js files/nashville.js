const visit_button = document.getElementById('content1');
const footing1= document.getElementById('footing1');
const footing2 =document.getElementById('footing2');
const experiences_button=document.getElementById('content2');
const our_mission_button= document.getElementById('content3');
const support_button= document.getElementById('content4');
const footing3= document.getElementById('footing3');
const footing4= document.getElementById('footing4');

visit_button.addEventListener('mouseover', ()=>{
    footing1.style.display= 'flex'
    footing1.style.pointerEvents= ' visible '
});
visit_button.addEventListener('mouseout', ()=>{
    footing1.style.display= 'none'
    
});


experiences_button.addEventListener('mouseover', ()=>{
    footing2.style.display= 'flex'
    footing2.style.pointerEvents= ' visible '
});
experiences_button.addEventListener('mouseout', ()=>{
    footing2.style.display= 'none'
    
});

our_mission_button.addEventListener('mouseover' ,()=> {
    footing3.style.display= 'flex'
});
our_mission_button.addEventListener('mouseout' ,()=> {
    footing3.style.display= 'none'
});
support_button.addEventListener('mouseover' ,()=> {
    footing4.style.display= 'flex'
});
support_button.addEventListener('mouseout' ,()=> {
    footing4.style.display= 'none'
});
