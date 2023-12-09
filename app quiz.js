
let  questions =[
  {
    first_question:'what is the python',
    options:{
          ans1:'game',
          ans2:'laguage',
          ans3:'program',
          ans4:'app'
        },
    correct:'laguage'
  },
    {
    first_question:'what is the captital of pakistan',
    options:{
            ans1:'multan',
            ans2:'lahore',
            ans3:'islamabad',
            ans4:'karachi'
          },
      correct:'islamabad'
    },
    {
        first_question:'what is the 5 * 10',
        options:{
                ans1:'40',
                ans2:'50',
                ans3:'70',
                ans4:'20'
              },
          correct:'50'
    }
];
let correct_answers=0;
  let index=0;
  let start = document.getElementById('button');

    start.addEventListener('click',function(){
      add_question()
      })
    

  function add_question(){
    let div=document.querySelector('div');
    let question=questions[index];
      div.innerHTML='<h1>'+question.first_question+'</h1>'
    let option = question.options
        for(let forloop in option){
          option_button=document.createElement('button')
          option_button.innerHTML=option[forloop];
          option_button.classList.add('answer')
          div.append(option_button);
    };
            check_answer();
};
    function check_answer(){
    let button= document.getElementsByClassName('answer');
    let question=questions[index];
            for(ans_bt of button){
                ans_bt.addEventListener('click',function(){
    let user_selection=this.innertext;

            if(user_selection == questions.correct){
                correct_answers++;
            }
            index++;
          questions_length= questions.length;
        if(index < questions_length){
          // console.log('questions_length :' + questions_length)
          // console.log('index :' + index)
            add_question()  
        }else{
          end_game()
        }

      })  
}
}  
    function end_game(){
          questions_length= questions.length;
    let  container=document.querySelector('.div');
          container.innerHTML='<h1>game over!</h1> <h1> scrore:'+correct_answers + '/'+questions_length+'<h1>';
    let button=document.createElement('button');
          button.id='start'
          button.innerText='restart game'
          container.append(button);
          start_game()
}
      function start_game(){
          let cation = document.getElementById('start');
          cation.addEventListener('click',function(){
          location.reload()
          })  
      };
        
            
            
            
            
            // console.log (question)
