function Click(){
    var oShell = new ActiveXObject("Shell.Application");
    var commandtoRun = "C:\\Program Files\\tvnc\\tvnviewer.exe";
    // oShell.ShellExecute(commandtoRun,"","","open","1");
    oShell.open(commandtoRun);
}