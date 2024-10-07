
if (typeof gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity !== "undefined") {
  gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity = {};


gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("IsCapacityLimited") : false);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("InventoryName")).getChild(eventsFunctionContext.getArgument("ItemName")).getChild("IsCapacityLimited").setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("IsCapacityLimited") : false);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("InventoryName")).getChild(eventsFunctionContext.getArgument("ItemName")).getChild("IsCapacityLimited").setBoolean(true);
}}

}


};

gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity.func = function(runtimeScene, InventoryName, ItemName, IsCapacityLimited, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Inventories"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Inventories"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "InventoryName") return InventoryName;
if (argName === "ItemName") return ItemName;
if (argName === "IsCapacityLimited") return IsCapacityLimited;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Inventories__SetIsLimitedItemCapacity.registeredGdjsCallbacks = [];