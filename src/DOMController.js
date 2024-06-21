import ProjectMaster from "./ProjectMaster"

export default class DOMController {

    static initialize(){
        console.log("Starting point -- Setting things up!")
    }
    static firstFunc (){
        console.log("Just testing this new class!")

        ProjectMaster.getTodaysTodos();
        ProjectMaster.addToProject("Inbox", "t1", "desc", new Date(), "low")
        ProjectMaster.addToProject("Inbox", "t2", "desc", new Date(2024,5,22), "high")
        ProjectMaster.addToProject("Inbox", "t3", "desc", new Date(2024,5,30), "low")
        ProjectMaster.addToProject("Inbox", "t4", "desc", new Date(), "low")
        ProjectMaster.addToProject("Inbox", "t5", "desc", new Date(2024,5,27), "low")
        ProjectMaster.addToProject("Inbox", "t6", "desc", new Date(2024,5,23), "low")
        console.log(ProjectMaster.getProjectTodos("Inbox"))
    }
}