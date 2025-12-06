



var browsername = "chromium"


switch ("webkit") {
    case "firefox": {

        console.log("this block is for firefox")
    }
        break;
    case "chrome": {

        console.log("this block is for chrome")
    }
        break;
    case "webkit": {

        console.log("this block is for webkit")
    }
        break;
    case "chromium": {

        console.log("this block is for chromium")
    }
        break;
    case "webkit": {

        console.log("this block is for chromium-2nd webkit")
    }
        break;
    default:{
        console.log("no case matched")

    }
        break;
}