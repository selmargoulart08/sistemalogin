function acesso(form) {

/*checa nome  senha, caso digite com letras maiusculas, será convertido para letras minusculas
*/
    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()

    if (form.nome.value == "admin" && form.senha.value == "123" ||
     form.nome.value == "rychard" && form.senha.value == "345" ||
     form.nome.value == "junior" && form.senha.value == "321" ||
     form.nome.value == "nyce" && form.senha.value == "543" ) {
         location = "logado.html"
     }
    else {
        form.nome.value=""
        form.senha.value=""
        alert("Dados Incorretos")
    }
}