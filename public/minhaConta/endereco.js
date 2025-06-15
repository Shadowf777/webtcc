var r = document.getElementById('rua');
var cep = document.getElementById('cep');
var c = document.getElementById('cidade');
var e = document.getElementById('estado');
var n = document.getElementById('numero');
var comp = document.getElementById('complemento');

document.getElementById('cep').addEventListener('input', async (event) => {
    event.preventDefault();
    r.value = "";
    c.value = "";
    e.value = "";
    if (document.getElementById('cep').value.length == 8) {
        var str = 'https://viacep.com.br/ws/cep/json/'
        var a = document.getElementById('cep').value;
        str = str.replace('cep/', a + "/");
        var fet = await fetch(str);
        var d = await fet.json();
        console.log(d['logradouro']);
        r.value = d['logradouro'];
        r.readOnly = true;
        c.value = d['localidade']
        c.readOnly = true;
        e.value = d['estado']
        e.readOnly = true;
    }
});

document.getElementById('formEdicao').addEventListener('submit', (event) => {
    console.log('aaaaaaaaa');
    localStorage.setItem("end",[cep.value,r.value,n.value,c.value,e.value,comp.value])
    event.preventDefault();
    window.location.href = "minhaConta.html"
})

