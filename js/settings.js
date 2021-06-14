import { quiz } from "./quiz.js"

export class Settings
{
constructor()
{
this.settings=document.getElementById("settings")
this.quiz=document.getElementById("quiz")
this.category=document.getElementById("category")
this.difficulty=document.getElementsByName("difficulty")
this.numberOfQ=document.getElementById("numberOfQ")
this.startBtn=document.getElementById("start")
this.alert1=document.getElementById("alert1")

$(this.startBtn).click(this.startQuiz.bind(this))
}

async startQuiz()
{
   let category=this.category.value
   let difficulty=[...this.difficulty].filter((e)=>e.checked)[0].value
   let numberOfQ =this.numberOfQ.value
//    let url =`https://opentdb.com/api.php?amount=${numberOfQ}&category=${category}&difficulty=${difficulty}`
   let data =(await(await fetch(`https://opentdb.com/api.php?amount=${numberOfQ}&category=${category}&difficulty=${difficulty}`)).json()).results
   // console.log(data)
   if(data.length>0&&numberOfQ!=null)
   {
    $(this.settings).fadeOut(300,()=>$(this.quiz).fadeIn(300))
    new quiz(data,numberOfQ)
   }
   else
   {
     this.alert1.classList.replace("d-none","d-block")
   }

}

}