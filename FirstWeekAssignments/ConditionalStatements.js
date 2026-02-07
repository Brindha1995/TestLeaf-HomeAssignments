//launchBrowser

let browserName = "chrome"
if (browserName == "chrome")
{
    console.log("The browser is Chrome")
}
else
    console.log("The browser is not chrome")

//runTests
let testType = "performance"
switch(testType)
    {
        case "performance":
            console.log("It is performance testing")
            break
        case "sanity":
            console.log("It is sanity testing")
            break
        case "regression":
            console.log("It is regression testing")
            break
        default:
            console.log("It is smoke testing")
    }

