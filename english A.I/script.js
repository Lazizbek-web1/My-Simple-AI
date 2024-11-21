document.addEventListener("keydown", (e)=>{
    let a = e.key
    if(a=="q" || a=="w" || a=="e" || a=="r" || a=="t" || a=="y" || a=="u" || a=="i" || a=="o" || a=="p" || a=="a" || a=="s" || a=="d" || a=="f" || a=="g" || a=="h" || a=="j" || a=="k" || a=="l" || a=="z" || a=="x" || a=="c" || a=="v" || a=="b" || a=="n" || a=="m" || a==" "){
        yoz(a)
    }
    else if(a=="Backspace"){
        let b = document.querySelector(".yozuv").innerHTML
        b = b.slice(0, (b.length-1))
        document.querySelector(".yozuv").innerHTML=b
    }
    else if(a=="Enter"){send()}/* 
    console.log(e); */
})

function yoz(harf){
    document.querySelector(".yozuv").innerHTML+=harf
}

function send(){
    let b = document.querySelector(".yozuv").innerHTML
    if (b.trim()==""){
        return alert("First write the question and then click send")
    }
    else{
        document.querySelector(".container").innerHTML+=`
        <div class="messages">
            <div class="question">${b}</div>
        </div>
        `
        answer(b.trim())
        document.querySelector(".yozuv").innerHTML=""
    }
}
let s1 = ""
let s2 = ""
let s3 = ""
let s4 = ""
let s5 = ""
let s6 = ""
let s7 = ""
let s8 = ""
let s9 = ""
let s10 = ""
let s11 = ""
let s12 = ""
let s13 = ""
let s14 = ""
let s15 = ""

// Sentence diveder

function SD(a, b){
    if(a==1){s1=b}
    else if(a==2){s2=b}
    else if(a==3){s3=b}
    else if(a==4){s4=b}
    else if(a==5){s5=b}
    else if(a==6){s6=b}
    else if(a==7){s7=b}
    else if(a==8){s8=b}
    else if(a==9){s9=b}       
    else if(a==10){s10=b}
    else if(a==11){s11=b}
    else if(a==12){s12=b}
    else if(a==13){s13=b}
    else if(a==14){s14=b}
    else if(a==15){s15=b}
    else if(a>15){
        return alert("don't write more than 15 words")
    }
}

function chiq(){
    console.log("so'z1 - "+s1, "so'z2 - "+s2, "so'z3 - "+s3, "so'z - "+s4, "so'z - "+s5, "so'z - "+s6, "so'z - "+s7, "so'z - "+s8, "so'z - "+s9, "so'z - "+s10, "so'z - "+s11, "so'z - "+s12, "so'z - "+s13, "so'z - "+s14, "so'z - "+s15);
}

function AIsend(ja){
        document.querySelector(".container").innerHTML+=`
        <div class="messages">
            <div class="answer">${ja}</div>
        </div>
        `
}

function WC(b){
    // word counter
    let s = 0
    let head = 0
    for(i=0; i<b.length; i++){
        if(b[i]==" "){
            s++
            SD((s), b.slice(head, (i-head)))/* 
            console.log(b.slice(head, (i-head))); */
            head=i
        }
        
        /* if(s>0 && i==(b.length-1)){SD(s, b.slice(head, (i-head+1)))} */
    }
    if(s==0){SD(1, b)}
    else{SD((s+1), (b.slice(head, (i-head))))}

    chiq()
    let f = ""
    if(s==0){f = "the message contains 1 word"}
    else{f = "the message contains  "+(s+1)+" words"}
    return f
}

function answer(a){
    if(a=="hi" || a=="hi there" || a=="hello" || a=="good morning" || a=="good evening" || a=="good night" || a=="good afternoon"){
        AIsend("hi there!")
    }
    else{AIsend("Sorry I didn't get it.")}
    AIsend(WC(a))
}










