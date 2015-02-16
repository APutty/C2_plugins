﻿function GetPluginSettings()
{
	return {
		"name":			"List control",
		"id":			"Rex_ListCtrl",
		"version":		"0.1",
		"description":	"Manipulate instances of each line in a list.",
		"author":		"Rex.Rainbow",
		"help url":		"https://dl.dropboxusercontent.com/u/5779181/C2Repo/rex_listctrl.html",
		"category":		"Rex - Logic",
		"type":			"world",			// appears in layout
		"rotatable":	true,
		"flags":	    pf_position_aces | pf_size_aces | pf_angle_aces | pf_appearance_aces | pf_zorder_aces
	};
};

////////////////////////////////////////
// Conditions 
AddCondition(1, cf_trigger, "On line visible", "Visible", 
             "On line visible", 
             "Triggered when a line is visible.", "OnLineVisible");
AddCondition(2, cf_trigger, "On line invisible", "Visible", 
             "On line invisible", 
             "Triggered when a line is invisible.", "OnLineInvisible");  

AddCondition(11, cf_looping | cf_not_invertible, "For each line", "List", 
             "For each line", 
             "Repeat the event for each line in list.", "ForEachLine"); 

AddNumberParam("Start", "Start line index.", 0);
AddNumberParam("End", "Start line index.", 0);
AddCondition(12, cf_looping | cf_not_invertible, "For each line in a range", "List", 
             "For each line from <i>{0}</i> to <i>{1}</i>", 
             "Repeat the event for each line in a range in list.", "ForEachLine");
                                       
AddCondition(13, cf_looping | cf_not_invertible, "For each visible line", "Visible", 
             "For each visible line", 
             "Repeat the event for each visible line.", "ForEachVisibleLine"); 

AddStringParam("Key", "The key of custom data.", '""');
AddCmpParam("Comparison", "Choose the way to compare data.");
AddNumberParam("Value", "The value to compare the data to.");             
AddCondition(14, cf_looping | cf_not_invertible, "For each matched line", "Filter", 
             "For each line which custom data[<i>{0}</i>] <i>{1}</i> <i>{2}</i>", 
             "Repeat the event for each matched line.", "ForEachMatchedLine");              
////////////////////////////////////////
// Actions
AddNumberParam("OY", "Offset Y of this list, in pixels. Start at 0.", 0);
AddAction(1, 0, "Set", "Offset Y", 
          "Set offset Y to <i>{0}</i>", 
          "Set offset Y.", "SetOY"); 
AddNumberParam("Value", "Add value to Offset Y, in pixels", 0);
AddAction(2, 0, "Add to", "Offset Y", 
          "Add <i>{0}</i> to offset Y", 
          "Add to Offset Y.", "AddOY"); 
AddObjectParam("Instance", "Instance belong the line.");
AddAction(3, 0, "Pin instance", "Instances", 
          "Pin <i>{0}</i> to current visible line", 
          'Pin instance to current visible line under "Condition: On line visible". It will be destroyed while line is invisible.', "PinInstToLine"); 
AddObjectParam("Instance", "Instance belong the line.");
AddAction(4, 0, "Unpin instance", "Instances", 
          "Unpin <i>{0}</i>", 
          'Unpin instance from line.', "UnPinInst");            
AddNumberParam("Total lines count", "Total lines count of this list.", 10);
AddAction(5, 0, "Set total lines count", "List", 
          "Set total lines count to <i>{0}</i>", 
          "Set total lines count.", "SetLinesCount"); 
AddNumberParam("Line index", "Line index.", 0);
AddAction(6, 0, "Scroll to index", "Offset Y", 
          "Scroll offset Y to line <i>{0}</i>", 
          "Scroll offset Y to line lindex.", "SetOYToLineIndex"); 
AddNumberParam("Percentage", "Scroll list, 0 is top, 1 is bottom.", 1);
AddAction(7, 0, "Scroll by percentage", "Offset Y", 
          "Scroll offset Y by percentage to <i>{0}</i>", 
          "Scroll offset Y by percentage.", "SetOYByPercentage"); 		  
		  
AddNumberParam("Line index", "Line index.", 0);
AddStringParam("Key", "The key of custom data.", '""');
AddAnyTypeParam("Value", "The value to store in the line.", 0);
AddAction(11, 0, "Set value", "Custom data", 
          "Set key <i>{1}</i> to <i>{2}</i> in line <i>{0}</i>",
          "Set custom data in a line.", "SetValue"); 
AddStringParam("Key", "The key of custom data.", '""');
AddAction(12, 0, "Clean key in all lines", "Custom data", 
          "Clean key <i>{1}</i> in all lines",
          "Clean key in all line.", "CleanKeyInAllLine");
		  

AddNumberParam("Insert at", "Line index for inserting.", 0);
AddNumberParam("Line number", "Line number for inserting.", 1);
AddAction(21, 0, "Insert new lines", "Insert", 
          "Insert <i>{1}</i> new lines at <i>{0}</i>", 
          "Insert new lines.", "InsertNewLines"); 

AddNumberParam("Remove from", "Line index for removing.", 0);
AddNumberParam("Line number", "Line number for removing.", 1);
AddAction(22, 0, "Remove lines", "Remove", 
          "Remove <i>{1}</i> lines from index <i>{0}</i>", 
          "Remove lines.", "RemoveLines");

AddNumberParam("Insert at", "Line index for inserting.", 0);
AddStringParam("Content", "Content of lines in JSON string.", '""');
AddAction(23, 0, "Insert lines", "Insert", 
          "Insert lines at <i>{0}</i> with content <i>{1}</i>", 
          "Insert lines with content.", "InsertLines");

AddComboParamOption("back");
AddComboParamOption("front");
AddComboParam("Where", "Whether to insert at the beginning or the end of the list.", 0);
AddNumberParam("Line number", "Line number for inserting.", 1);
AddAction(24, 0, "Push new lines", "Insert", 
          "Push <i>{0}</i> <i>{1}</i> new lines", 
          "Push new lines.", "PushNewLines");  
          
AddComboParamOption("back");
AddComboParamOption("front");
AddComboParam("Where", "Whether to insert at the beginning or the end of the list.", 0);
AddStringParam("Content", "Content of lines in JSON string.", '""');
AddAction(25, 0, "Push lines", "Insert", 
          "Push <i>{0}</i> with content <i>{1}</i>", 
          "Push lines with content.", "PushLines");  
		  
AddNumberParam("Line height", "Line height, in pixels.", 30);
AddAction(31, 0, "Set line height", "Line height", 
          "Set line height to <i>{0}</i>", 
          "Set line height.", "SetLineHeight"); 
		  
AddAction(51, 0, "Refresh", "Visible", 
          "Refresh visible lines", 
          "Refresh visible lines.", "RefreshVisibleLines");           
////////////////////////////////////////
// Expressions
AddExpression(1, ef_return_number, "Get selected line index", "Visible", "LineIndex", 
              'Get selected line index in "Condition: On line visible", or "Condition: On line invisible".');
AddExpression(3, ef_return_number, "Get position X of selected line", "Visible", "LineTLX", 
              'Get top-left position X of line in "Condition: On line visible", in pixels');
AddExpression(4, ef_return_number, "Get position Y of selected line", "Visible", "LineTLY", 
              'Get top-left position Y of line in "Condition: On line visible", in pixels');
AddNumberParam("UID", "UID of pinned instance.", 0);              
AddExpression(5, ef_return_number, "Get line index of pinned instance", "Line index", "UID2LineIndex", 
              "Get line index of pinned instance by UID. (-1) is invalid.");
AddNumberParam("Line index", "Line index.", 0);              
AddExpression(6, ef_return_number, "Get position Y by line index", "Offset Y", "LineIndex2LineTLY", 
              "Get top-left position Y by line index");              
AddExpression(7, ef_return_number, "Get total lines count", "List", "TotalLinesCount", 
              "Get total lines count.");
                                                                          
AddNumberParam("Index", "Index of line.", 0);
AddStringParam("Key", "The name of the key.", '""');
AddExpression(11, ef_return_any | ef_variadic_parameters, "Get value at", "Custom data", "At", 
              "Get value by line index and key. Add 3rd parameter for default value if this key is not existed.");

AddExpression(21, ef_return_string, "Get last removed lines", "Remove", "LastRemovedLines", 
              'Get last removed lines in JSON string after "Action: Remove lines".');
              
ACESDone();

// Property grid properties for this plugin
var property_list = [
    new cr.Property(ept_color, "Color",	cr.RGB(0, 0, 0), "Color for showing at editor.", "firstonly"),
    new cr.Property(ept_float, "Line height", 30, "Default line height, in pixels."),    
    new cr.Property(ept_integer, "Total lines", 10, "Total lines count in this list."), 
    new cr.Property(ept_combo, "Clamp OY", "Yes", "Clamp offset Y in vertical boundary.", "NO|Yes"), 
    new cr.Property(ept_combo, "Hotspot", "Top-left", "Choose the location of the hot spot in the object.", 
                    "Top-left|Top|Top-right|Left|Center|Right|Bottom-left|Bottom|Bottom-right"),					
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
		
	// Plugin-specific variables
	// this.myValue = 0...
}

IDEInstance.prototype.OnCreate = function()
{

    switch (this.properties["Hotspot"])
    {
        case "Top-left" :
            this.instance.SetHotspot(new cr.vector2(0, 0));
            break;
        case "Top" :
            this.instance.SetHotspot(new cr.vector2(0.5, 0));
            break;
        case "Top-right" :
            this.instance.SetHotspot(new cr.vector2(1, 0));
            break;
        case "Left" :
            this.instance.SetHotspot(new cr.vector2(0, 0.5));
            break;
        case "Center" :
            this.instance.SetHotspot(new cr.vector2(0.5, 0.5));
            break;
        case "Right" :
            this.instance.SetHotspot(new cr.vector2(1, 0.5));
            break;
        case "Bottom-left" :
            this.instance.SetHotspot(new cr.vector2(0, 1));
            break;
        case "Bottom" :
            this.instance.SetHotspot(new cr.vector2(0.5, 1));
            break;
        case "Bottom-right" :
            this.instance.SetHotspot(new cr.vector2(1, 1));
            break;
    }
}

IDEInstance.prototype.OnInserted = function()
{
}

IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
	// Edit image link
	if (property_name === "Hotspot")
	{
        switch (this.properties["Hotspot"])
        {
            case "Top-left" :
                this.instance.SetHotspot(new cr.vector2(0, 0));
                break;
            case "Top" :
                this.instance.SetHotspot(new cr.vector2(0.5, 0));
                break;
            case "Top-right" :
                this.instance.SetHotspot(new cr.vector2(1, 0));
                break;
            case "Left" :
                this.instance.SetHotspot(new cr.vector2(0, 0.5));
                break;
            case "Center" :
                this.instance.SetHotspot(new cr.vector2(0.5, 0.5));
                break;
            case "Right" :
                this.instance.SetHotspot(new cr.vector2(1, 0.5));
                break;
            case "Bottom-left" :
                this.instance.SetHotspot(new cr.vector2(0, 1));
                break;
            case "Bottom" :
                this.instance.SetHotspot(new cr.vector2(0.5, 1));
                break;
            case "Bottom-right" :
                this.instance.SetHotspot(new cr.vector2(1, 1));
                break;
        }
	}
	else if (property_name === "Total lines")
	{
	    if (this.properties["Total lines"] < 0)
	        this.properties["Total lines"] = 0;
	}
}

IDEInstance.prototype.OnRendererInit = function(renderer)
{
}
	
// Called to draw self in the editor
IDEInstance.prototype.Draw = function(renderer)
{
    var quad = this.instance.GetBoundingQuad();
    renderer.Fill(quad, this.properties["Color"]);
}

IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}

IDEInstance.prototype.OnTextureEdited = function ()
{
}