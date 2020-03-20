/* import "./styles.css";


const square = document.querySelector("div");

const btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
     square.dispatchEvent(new Event('mouseout'));
});

/* square.onmouseover = () =>{
  square.style.backgroundColor = "red";
}

square.onmouseout= () =>{
  square.style.backgroundColor = "greenyellow";
} */

/* 
square.addEventListener('mouseover',()=>{
  square.style.backgroundColor = "blue";
  square.style.width = "300px";
} );

square.addEventListener('mouseout',()=>{
  square.style.backgroundColor = "greenyellow";
  square.style.transform = "rotate(20deg)";
  square.style.transition = "2s";
} ),{once:true}; */





/* const app = document.querySelector("#app");

app.innerHTML= ` 

<h1>My app</h1>
    <section class="container">
        <img src="https://picsum.photos/id/237/200/300" alt="chien">
        <p class="class-tes">Je suis un paragraphe
            <a href="https://kouleko.net/" target="_blank">Portfolio</a>
        </p>
        <input type="text">
    </section>

    <article class="red">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam optio officia ab saepe nostrum neque praesentium eaque, perspiciatis voluptates omnis fugit eveniet quam blanditiis suscipit recusandae, provident ducimus facere impedit.
            At magnam assumenda odio quia minus ea, eius inventore voluptate aliquam porro deserunt culpa totam non omnis vel unde harum libero voluptatibus eos veritatis magni fugit ratione nemo! Dolores, officia!
            Ducimus beatae et ipsam possimus perferendis corporis commodi, veniam eum deserunt libero voluptates voluptatibus quisquam quidem incidunt. Praesentium ex nulla, culpa adipisci voluptatibus obcaecati, cumque quisquam reiciendis laudantium id aperiam.
        </p>
    </article> 

    <ul>
    <li>JNFN</li>
    <li>SVN,FD</li>
</ul>

<ol>
<li>ZHFJSH</li>
<li>DV,NF</li>
</ol>

`; */


/* const p = document.querySelector("p");
const img = document.querySelector("img");
const section = document.querySelector("section");
const article = document.querySelector("article");
const a = document.querySelector("a");
const input = document.querySelector("input");


p.innerHTML = "<strong>Hello ici</strong>";

img.src = "https://picsum.photos/seed/picsum/200/300";


console.log(input.focus());

setTimeout(()=>{
  input.disabled=true;
},1000);


console.log(article.className);

//article.className = "mytest container";

section.classList.add("mytest");

article.classList.remove("red");

setTimeout(()=>{
  article.classList.toggle("mytest");
},5000); */
 

import "./styles.css";

// AFFICHAGE TODO

const ul = document.querySelector('ul');

const form = document.querySelector('form');
const input = document.querySelector('form>input');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const value = input.value;
  input.value='';
  addTodo(value);
});

const todos = [
  {
    text: "Je suis une todo",
    done:false,
    editMode:true
  },
  {
    text: "Mon js todo",
    done:true,
    editMode:false
  }
]

const displayTodo = () =>{
  const todosNode = todos.map((todo,index)=>{
    if(todo.editMode){
       return createTodoEditElement(todo,index)
    }else{
      return createTodoElement(todo,index);
    }
  });
  ul.innerHTML='';
  ul.append(...todosNode);
};

const createTodoElement = (todo,index) =>{
  const li = document.createElement('li');
  const buttonDelete = document.createElement('button');
  buttonDelete.innerHTML = 'Supprimer';
  const buttonEdit = document.createElement('button');
  buttonEdit.innerHTML = 'Edit';
  buttonDelete.addEventListener('click',(e)=>{
    e.stopPropagation();
     deleteTodo(index);
  });
  
  buttonEdit.addEventListener('click', event=>{
    event.stopPropagation();
    toggleEditMode(index);
  })

  li.innerHTML=`
  <span class="todo ${todo.done ?'done' : ''}"></span>
  <p>${todo.text}</p>
  `;
  li.addEventListener('click', (e)=>{
    toggleTodo(index);
  })
  li.append(buttonEdit,buttonDelete);
  return li;
};

const createTodoEditElement = (todo,index) =>{
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type= 'text';
  input.value = todo.text;
  const btnSave = document.createElement('button');
  btnSave.innerHTML = 'Save';
  const btnCancel = document.createElement('button');
  btnCancel.innerHTML = 'Cancel';
  btnCancel.addEventListener('click',e=>{
    e.stopPropagation();
    toggleEditMode(index);
  });
  btnSave.addEventListener('click',event=>{
    editTodo(index,input);
  });
  li.append(input,btnCancel,btnSave);
  return li;
}


const addTodo = (text) =>{
  todos.push({
    text:text,
    done:false
  });
  displayTodo();
}

const deleteTodo = (index) =>{
  todos.splice(index,1);
  displayTodo();
}

const toggleTodo = index =>{
  todos[index].done = !todos[index].done;
  displayTodo();
}



const toggleEditMode = (index)=>{
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
}

const editTodo = (index,input) =>{
    const value = input.value;
    todos[index].text = value;
    todos[index].editMode = false; 
    displayTodo();
};

displayTodo();