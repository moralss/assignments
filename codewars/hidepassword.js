function hidePasswordFromConnection(urlString) {
    var viewpassword = urlString.search(/password=/g);
    var test = urlString.slice(viewpassword, urlString.length);
    var password = test.split("=");
    var passwordNumber = password[1].split('');
    for (var i in passwordNumber) {
        passwordNumber[i] = "*";
    }
    password[1] = passwordNumber.join("");
    var final = urlString.replace(test, password.join("="));
    return final;
}


console.log(hidePasswordFromConnection("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345"));



// Test.assertEquals(hidePasswordFromConnection("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345")
// , "jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****");
