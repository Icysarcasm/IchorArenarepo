gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitletextObjects1= [];
gdjs.MenuCode.GDTitletextObjects2= [];
gdjs.MenuCode.GDSplashtextObjects1= [];
gdjs.MenuCode.GDSplashtextObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDExitObjects1= [];
gdjs.MenuCode.GDExitObjects2= [];
gdjs.MenuCode.GDSettingsObjects1= [];
gdjs.MenuCode.GDSettingsObjects2= [];
gdjs.MenuCode.GDRainObjects1= [];
gdjs.MenuCode.GDRainObjects2= [];
gdjs.MenuCode.GDRain2Objects1= [];
gdjs.MenuCode.GDRain2Objects2= [];
gdjs.MenuCode.GDRain3Objects1= [];
gdjs.MenuCode.GDRain3Objects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDarenaObjects1= [];
gdjs.MenuCode.GDarenaObjects2= [];
gdjs.MenuCode.GDleaderboardObjects1= [];
gdjs.MenuCode.GDleaderboardObjects2= [];
gdjs.MenuCode.GDInfotextObjects1= [];
gdjs.MenuCode.GDInfotextObjects2= [];


gdjs.MenuCode.asyncCallback30366908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Templatekillhouse", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback30366908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback32247468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 1000000, "easeInOutCubic", 1, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback32247468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback32289900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Arena", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback32289900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("It only gets worse from here");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("I hope you've got a good dry cleaner...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("Wood has more uses than you'd think...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("Holy Bloodshed Batman!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 1000000, "easeInOutCubic", 1, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects1[k] = gdjs.MenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("arena"), gdjs.MenuCode.GDarenaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDarenaObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDarenaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDarenaObjects1[k] = gdjs.MenuCode.GDarenaObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDarenaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 1000000, "easeInOutCubic", 1, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboard"), gdjs.MenuCode.GDleaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDleaderboardObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDleaderboardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDleaderboardObjects1[k] = gdjs.MenuCode.GDleaderboardObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDleaderboardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "aa1c24f4-3bc4-4441-b603-858fb087b64a", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MenuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDExitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDExitObjects1[k] = gdjs.MenuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDExitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitletextObjects1.length = 0;
gdjs.MenuCode.GDTitletextObjects2.length = 0;
gdjs.MenuCode.GDSplashtextObjects1.length = 0;
gdjs.MenuCode.GDSplashtextObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDRainObjects1.length = 0;
gdjs.MenuCode.GDRainObjects2.length = 0;
gdjs.MenuCode.GDRain2Objects1.length = 0;
gdjs.MenuCode.GDRain2Objects2.length = 0;
gdjs.MenuCode.GDRain3Objects1.length = 0;
gdjs.MenuCode.GDRain3Objects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDarenaObjects1.length = 0;
gdjs.MenuCode.GDarenaObjects2.length = 0;
gdjs.MenuCode.GDleaderboardObjects1.length = 0;
gdjs.MenuCode.GDleaderboardObjects2.length = 0;
gdjs.MenuCode.GDInfotextObjects1.length = 0;
gdjs.MenuCode.GDInfotextObjects2.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
gdjs.MenuCode.GDTitletextObjects1.length = 0;
gdjs.MenuCode.GDTitletextObjects2.length = 0;
gdjs.MenuCode.GDSplashtextObjects1.length = 0;
gdjs.MenuCode.GDSplashtextObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDRainObjects1.length = 0;
gdjs.MenuCode.GDRainObjects2.length = 0;
gdjs.MenuCode.GDRain2Objects1.length = 0;
gdjs.MenuCode.GDRain2Objects2.length = 0;
gdjs.MenuCode.GDRain3Objects1.length = 0;
gdjs.MenuCode.GDRain3Objects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDarenaObjects1.length = 0;
gdjs.MenuCode.GDarenaObjects2.length = 0;
gdjs.MenuCode.GDleaderboardObjects1.length = 0;
gdjs.MenuCode.GDleaderboardObjects2.length = 0;
gdjs.MenuCode.GDInfotextObjects1.length = 0;
gdjs.MenuCode.GDInfotextObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
