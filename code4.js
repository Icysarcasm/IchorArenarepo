gdjs.OptionsCode = {};
gdjs.OptionsCode.localVariables = [];
gdjs.OptionsCode.GDTitletextObjects1= [];
gdjs.OptionsCode.GDTitletextObjects2= [];
gdjs.OptionsCode.GDSplashtextObjects1= [];
gdjs.OptionsCode.GDSplashtextObjects2= [];
gdjs.OptionsCode.GDBackObjects1= [];
gdjs.OptionsCode.GDBackObjects2= [];
gdjs.OptionsCode.GDRebindObjects1= [];
gdjs.OptionsCode.GDRebindObjects2= [];
gdjs.OptionsCode.GDSettingsObjects1= [];
gdjs.OptionsCode.GDSettingsObjects2= [];
gdjs.OptionsCode.GDRainObjects1= [];
gdjs.OptionsCode.GDRainObjects2= [];
gdjs.OptionsCode.GDRain2Objects1= [];
gdjs.OptionsCode.GDRain2Objects2= [];
gdjs.OptionsCode.GDRain3Objects1= [];
gdjs.OptionsCode.GDRain3Objects2= [];
gdjs.OptionsCode.GDNewTiledSpriteObjects1= [];
gdjs.OptionsCode.GDNewTiledSpriteObjects2= [];
gdjs.OptionsCode.GDSquareWhiteToggleObjects1= [];
gdjs.OptionsCode.GDSquareWhiteToggleObjects2= [];
gdjs.OptionsCode.GDuptextObjects1= [];
gdjs.OptionsCode.GDuptextObjects2= [];
gdjs.OptionsCode.GDdowntextObjects1= [];
gdjs.OptionsCode.GDdowntextObjects2= [];
gdjs.OptionsCode.GDLeftkeyObjects1= [];
gdjs.OptionsCode.GDLeftkeyObjects2= [];
gdjs.OptionsCode.GDrightkeyObjects1= [];
gdjs.OptionsCode.GDrightkeyObjects2= [];
gdjs.OptionsCode.GDreloadkeyObjects1= [];
gdjs.OptionsCode.GDreloadkeyObjects2= [];
gdjs.OptionsCode.GDbuildkeyObjects1= [];
gdjs.OptionsCode.GDbuildkeyObjects2= [];
gdjs.OptionsCode.GDaction1Objects1= [];
gdjs.OptionsCode.GDaction1Objects2= [];
gdjs.OptionsCode.GDaction2Objects1= [];
gdjs.OptionsCode.GDaction2Objects2= [];
gdjs.OptionsCode.GDaction3Objects1= [];
gdjs.OptionsCode.GDaction3Objects2= [];
gdjs.OptionsCode.GDMeleeKeyObjects1= [];
gdjs.OptionsCode.GDMeleeKeyObjects2= [];
gdjs.OptionsCode.GDInfoObjects1= [];
gdjs.OptionsCode.GDInfoObjects2= [];
gdjs.OptionsCode.GDSquareWhiteSliderObjects1= [];
gdjs.OptionsCode.GDSquareWhiteSliderObjects2= [];
gdjs.OptionsCode.GDTitletext2Objects1= [];
gdjs.OptionsCode.GDTitletext2Objects2= [];
gdjs.OptionsCode.GDResetObjects1= [];
gdjs.OptionsCode.GDResetObjects2= [];


gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


};gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Action 3?", "c", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Action 2?", "x", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Action 1?", "z", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Reload key?", "r", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Punch Key?", "f", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Build Key?", "b", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Right Key?", "d", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Left Key?", "a", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Down Key?", "s", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__PromptValidResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


};gdjs.OptionsCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.OptionsCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDBackObjects1[k] = gdjs.OptionsCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Leftkey"), gdjs.OptionsCode.GDLeftkeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("MeleeKey"), gdjs.OptionsCode.GDMeleeKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.OptionsCode.GDSquareWhiteSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("action1"), gdjs.OptionsCode.GDaction1Objects1);
gdjs.copyArray(runtimeScene.getObjects("action2"), gdjs.OptionsCode.GDaction2Objects1);
gdjs.copyArray(runtimeScene.getObjects("action3"), gdjs.OptionsCode.GDaction3Objects1);
gdjs.copyArray(runtimeScene.getObjects("buildkey"), gdjs.OptionsCode.GDbuildkeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.OptionsCode.GDdowntextObjects1);
gdjs.copyArray(runtimeScene.getObjects("reloadkey"), gdjs.OptionsCode.GDreloadkeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightkey"), gdjs.OptionsCode.GDrightkeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.OptionsCode.GDuptextObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDuptextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDuptextObjects1[i].getBehavior("Text").setText("Up : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDdowntextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDdowntextObjects1[i].getBehavior("Text").setText("Down : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDLeftkeyObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDLeftkeyObjects1[i].getBehavior("Text").setText("Left : " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDrightkeyObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDrightkeyObjects1[i].getBehavior("Text").setText("Right : " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDbuildkeyObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDbuildkeyObjects1[i].getBehavior("Text").setText("Build Toggle : " + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDMeleeKeyObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMeleeKeyObjects1[i].getBehavior("Text").setText("Melee Toggle: " + runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDaction1Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDaction1Objects1[i].getBehavior("Text").setText("Action 1: " + runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDaction2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDaction2Objects1[i].getBehavior("Text").setText("Action 2: " + runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDaction3Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDaction3Objects1[i].getBehavior("Text").setText("Action 3: " + runtimeScene.getGame().getVariables().getFromIndex(8).getAsString());
}
}{for(var i = 0, len = gdjs.OptionsCode.GDreloadkeyObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDreloadkeyObjects1[i].getBehavior("Text").setText("Reload: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber((( gdjs.OptionsCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rebind"), gdjs.OptionsCode.GDRebindObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDRebindObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDRebindObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDRebindObjects1[k] = gdjs.OptionsCode.GDRebindObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDRebindObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Up Key?", "w", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.OptionsCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDSquareWhiteToggleObjects1[k] = gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Dev Key?", "w", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.OptionsCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.OptionsCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "snickersbar";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDSquareWhiteToggleObjects1[k] = gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.OptionsCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) != "snickersbar";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDSquareWhiteToggleObjects1[k] = gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OptionsCode.GDSquareWhiteToggleObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.OptionsCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDSquareWhiteToggleObjects1[k] = gdjs.OptionsCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDTitletextObjects1.length = 0;
gdjs.OptionsCode.GDTitletextObjects2.length = 0;
gdjs.OptionsCode.GDSplashtextObjects1.length = 0;
gdjs.OptionsCode.GDSplashtextObjects2.length = 0;
gdjs.OptionsCode.GDBackObjects1.length = 0;
gdjs.OptionsCode.GDBackObjects2.length = 0;
gdjs.OptionsCode.GDRebindObjects1.length = 0;
gdjs.OptionsCode.GDRebindObjects2.length = 0;
gdjs.OptionsCode.GDSettingsObjects1.length = 0;
gdjs.OptionsCode.GDSettingsObjects2.length = 0;
gdjs.OptionsCode.GDRainObjects1.length = 0;
gdjs.OptionsCode.GDRainObjects2.length = 0;
gdjs.OptionsCode.GDRain2Objects1.length = 0;
gdjs.OptionsCode.GDRain2Objects2.length = 0;
gdjs.OptionsCode.GDRain3Objects1.length = 0;
gdjs.OptionsCode.GDRain3Objects2.length = 0;
gdjs.OptionsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OptionsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.OptionsCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.OptionsCode.GDuptextObjects1.length = 0;
gdjs.OptionsCode.GDuptextObjects2.length = 0;
gdjs.OptionsCode.GDdowntextObjects1.length = 0;
gdjs.OptionsCode.GDdowntextObjects2.length = 0;
gdjs.OptionsCode.GDLeftkeyObjects1.length = 0;
gdjs.OptionsCode.GDLeftkeyObjects2.length = 0;
gdjs.OptionsCode.GDrightkeyObjects1.length = 0;
gdjs.OptionsCode.GDrightkeyObjects2.length = 0;
gdjs.OptionsCode.GDreloadkeyObjects1.length = 0;
gdjs.OptionsCode.GDreloadkeyObjects2.length = 0;
gdjs.OptionsCode.GDbuildkeyObjects1.length = 0;
gdjs.OptionsCode.GDbuildkeyObjects2.length = 0;
gdjs.OptionsCode.GDaction1Objects1.length = 0;
gdjs.OptionsCode.GDaction1Objects2.length = 0;
gdjs.OptionsCode.GDaction2Objects1.length = 0;
gdjs.OptionsCode.GDaction2Objects2.length = 0;
gdjs.OptionsCode.GDaction3Objects1.length = 0;
gdjs.OptionsCode.GDaction3Objects2.length = 0;
gdjs.OptionsCode.GDMeleeKeyObjects1.length = 0;
gdjs.OptionsCode.GDMeleeKeyObjects2.length = 0;
gdjs.OptionsCode.GDInfoObjects1.length = 0;
gdjs.OptionsCode.GDInfoObjects2.length = 0;
gdjs.OptionsCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.OptionsCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.OptionsCode.GDTitletext2Objects1.length = 0;
gdjs.OptionsCode.GDTitletext2Objects2.length = 0;
gdjs.OptionsCode.GDResetObjects1.length = 0;
gdjs.OptionsCode.GDResetObjects2.length = 0;

gdjs.OptionsCode.eventsList11(runtimeScene);
gdjs.OptionsCode.GDTitletextObjects1.length = 0;
gdjs.OptionsCode.GDTitletextObjects2.length = 0;
gdjs.OptionsCode.GDSplashtextObjects1.length = 0;
gdjs.OptionsCode.GDSplashtextObjects2.length = 0;
gdjs.OptionsCode.GDBackObjects1.length = 0;
gdjs.OptionsCode.GDBackObjects2.length = 0;
gdjs.OptionsCode.GDRebindObjects1.length = 0;
gdjs.OptionsCode.GDRebindObjects2.length = 0;
gdjs.OptionsCode.GDSettingsObjects1.length = 0;
gdjs.OptionsCode.GDSettingsObjects2.length = 0;
gdjs.OptionsCode.GDRainObjects1.length = 0;
gdjs.OptionsCode.GDRainObjects2.length = 0;
gdjs.OptionsCode.GDRain2Objects1.length = 0;
gdjs.OptionsCode.GDRain2Objects2.length = 0;
gdjs.OptionsCode.GDRain3Objects1.length = 0;
gdjs.OptionsCode.GDRain3Objects2.length = 0;
gdjs.OptionsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OptionsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OptionsCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.OptionsCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.OptionsCode.GDuptextObjects1.length = 0;
gdjs.OptionsCode.GDuptextObjects2.length = 0;
gdjs.OptionsCode.GDdowntextObjects1.length = 0;
gdjs.OptionsCode.GDdowntextObjects2.length = 0;
gdjs.OptionsCode.GDLeftkeyObjects1.length = 0;
gdjs.OptionsCode.GDLeftkeyObjects2.length = 0;
gdjs.OptionsCode.GDrightkeyObjects1.length = 0;
gdjs.OptionsCode.GDrightkeyObjects2.length = 0;
gdjs.OptionsCode.GDreloadkeyObjects1.length = 0;
gdjs.OptionsCode.GDreloadkeyObjects2.length = 0;
gdjs.OptionsCode.GDbuildkeyObjects1.length = 0;
gdjs.OptionsCode.GDbuildkeyObjects2.length = 0;
gdjs.OptionsCode.GDaction1Objects1.length = 0;
gdjs.OptionsCode.GDaction1Objects2.length = 0;
gdjs.OptionsCode.GDaction2Objects1.length = 0;
gdjs.OptionsCode.GDaction2Objects2.length = 0;
gdjs.OptionsCode.GDaction3Objects1.length = 0;
gdjs.OptionsCode.GDaction3Objects2.length = 0;
gdjs.OptionsCode.GDMeleeKeyObjects1.length = 0;
gdjs.OptionsCode.GDMeleeKeyObjects2.length = 0;
gdjs.OptionsCode.GDInfoObjects1.length = 0;
gdjs.OptionsCode.GDInfoObjects2.length = 0;
gdjs.OptionsCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.OptionsCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.OptionsCode.GDTitletext2Objects1.length = 0;
gdjs.OptionsCode.GDTitletext2Objects2.length = 0;
gdjs.OptionsCode.GDResetObjects1.length = 0;
gdjs.OptionsCode.GDResetObjects2.length = 0;


return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
