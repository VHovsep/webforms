window.onload = init();

function init() {
  drowpage(); 
  bcolor();

  var inp_email = document.querySelector('input[name = myemail]');
  var inp_phone = document.querySelector('input[name = myphone]');
  var inp_name = document.querySelector('input[name = myname]');
  var inp_web_site = document.querySelector('input[name = myweb_site]');
  var inp_massage = document.getElementById('massage');

  document.querySelector('#mybtn').onclick = function () {
    var params = 'name=' + inp_name.value +'&' + 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'web_site=' + inp_web_site.value + '&' + 'massage=' + inp_massage.value;
    ajaxPost(params);
  }
}

function bcolor() {
  var color = document.getElementById('root');
  color.style.backgroundColor = '#4CAF50';
  return color;
}
	      
function create(elementName) {
  return document.createElement(elementName);
}

function formstyle() {
  var form = document.getElementById('myform'); 
  form.action = '';
  form.method = 'post';
  form.name='contact_form';
  form.setAttribute('style','width:400px; height:500px;background-color: #f6f6f6; border:solid #f6f6f6; list-style-type:none; list-style-position:outside; margin:60px 100px 40px 400px; padding:15px;box-shadow: 5px 5px 5px 5px black ');
  return form;
}

function drowh1(text) {
  var h1 = create('h1');
  h1.innerText = text;
  return h1;
}

function drowp(text) {
  var p = create('p');
  p.innerText = text;
  return p;
}

function drowInput(id,type,placeholder,style) {
  var input = create('input');
  input.type = type;
  input.name = id;
  input.setAttribute('placeholder',placeholder);
  input.setAttribute('style',style);
  return input;
}

function drowTextarea(cols,rows,id,placeholder,style) {
  var textarea = create('textarea');
  textarea.cols = cols;
  textarea.rows = rows;
  textarea.id = id;
  textarea.setAttribute('placeholder',placeholder);
  textarea.setAttribute('style',style);
  return textarea;
}


function drowButton(id,type,name,style) {
  var button = create('button');
  button.id = id;
  button.type = type;
  button.innerHTML = name;
  button.setAttribute('style',style);
  return button;
}

function drowpage() {
  var root = document.getElementById('root');
  var h1 = drowh1('Colorlib Contact Form');
  var p = drowp('Contact us for custom quote');

  var name = drowInput('myname','text','Your name','width:375px; font-size:13px; margin:10px 0 10px 0; padding: 6px 0 4px 10px; border:1px solid #cecece; background:#F6F6f6; border-radius:8px;');
  var email = drowInput('myemail','email','Your Email Address','width:375px; font-size:13px; margin:10px 0 10px 0; padding: 6px 0 4px 10px; border:1px solid #cecece; background:#F6F6f6; border-radius:8px;');
  var phone = drowInput('myphone','text','Your Phone Number(optional)','width:375px; font-size:13px;margin:10px 0 10px 0; padding: 6px 0 4px 10px; border:1px solid #cecece; background:#F6F6f6; border-radius:8px;');
  var web_site = drowInput('myweb_site','text','Your Web Site(optional)','width:375px; font-size:13px;margin:10px 0 10px 0; padding: 6px 0 4px 10px; border:1px solid #cecece; background:#F6F6f6; border-radius:8px;');
  var form = formstyle();
  var textarea = drowTextarea('40','6','massage','Type your message here...','width:375px; font-size:13px;margin:10px 0 10px 0; padding: 6px 0 4px 10px');
  var button = drowButton('mybtn','submit','Submit','cursor:pointer; width: 375px; margin:10px 0 10px 0; background-color: #4CAF50; border:none; color: white; padding: 15px 32px; text-align: center; font-size: 16px');

  form.appendChild(h1);
  form.appendChild(p);
  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(phone);
  form.appendChild(web_site);
  form.appendChild(textarea);
  form.appendChild(button);
  root.appendChild(form);
}

function ajaxPost(params) {
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      if(request.responseText == '1') {
        document.querySelector('#result').innerHTML = 'all okay!';
        alert ('all okay');
        document.querySelector('form').style.display = 'none';
      }
      else {
        document.querySelector('#result').innerHTML = request.responseText;
      }
    }
  }
  request.open('POST','script.php');
  request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  request.send(params);

}
