class Badge {
  constructor(teamMember) {

      switch(teamMember.constructor.name){
          case "Manager":
              this.finalListItem = "Office number: " + teamMember.officeNumber;
              break;
          case "Intern":
              this.finalListItem = "School: " + teamMember.school;
              break;
          case "Engineer":
              this.finalListItem = "Github: " + teamMember.github;
              break;
      }

      this.template = "<div class='badge card col-3'><div class='name card-header'>" + teamMember.name + "<br>" + teamMember.constructor.name + "</div><ul class='info list-group list-group-flush'><li class='list-group-item'>ID: " + teamMember.id + "</li><li class='list-group-item'>Email: " + teamMember.email + "</li><li class='list-group-item'>" + this.finalListItem + "</li></ul></div>";
  }

}

module.exports = Badge;

