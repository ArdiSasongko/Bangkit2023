//object composition digunakan agar tidak menuliskan kode yang sama (reprtitif)
//sehingga kita hanya membuat fungsi yang akan digunakan pada object sesuai kebutuhan

//membuat class
class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }

//membuat object composition (fungsi)

/*function canBuildUI(developer) {
    return {
      buildUI: () => {
        console.log(`${developer.name} is building UI...`);
      }
    }
  }*/

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`)
        }
    }
}
function canBuildAPI(developer) {
    return {
      buildAPI: () => {
        console.log(`${developer.name} is building API...`);
      }
    }
  }

function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
  }

//membuat objec yang sesuai peran(function), menggunakan fungsi Object.assign() untuk mengkomposisikan objec

//function createFrontEnd(name){
//    const developer = new Developer(name);
//    return Object.assign(developer, buildUi(developer));
//}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
