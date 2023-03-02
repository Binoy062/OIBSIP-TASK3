let inputdata = document.querySelector("#input_data");
let btn = document.getElementById("add_button");
var taskcontainer = document.querySelector(".taskcontainer");


inputdata.addEventListener('keyup',()=> {
    if(inputdata.value.trim() !== '') {
            btn.classList.add('active');
    }
     else {
         btn.classList.remove('active');
    }
})


btn.addEventListener('click',()=> {
    if(inputdata.value.trim()!=='') {
        let newlist = document.createElement('div');
        newlist.classList.add('add_list');
        newlist.innerHTML=`
        
        <div class ="item_btn">
        <div class="ans"><span>${inputdata.value}</span></div>
        <div class="ibtns">
        <i class = "fa fa-trash" aria-hidden= "true"></i>
        </div>
        </div>
        `
        taskcontainer.appendChild(newlist);

        inputdata.value='';
    }
    else {
        alert("Please Enter Valid task");
    }
})       
taskcontainer.addEventListener('click',(e)=> {
    if(e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove();
    }
})


