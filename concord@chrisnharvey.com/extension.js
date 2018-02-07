const Lang             = imports.lang;
const Main             = imports.ui.main;
const ExtensionUtils   = imports.misc.extensionUtils;
const Concord          = ExtensionUtils.getCurrentExtension();
const ActivateWindow   = Concord.imports.modules.activateWindow.ActivateWindow;
const ExtendLeftBox    = Concord.imports.modules.extendLeftBox.ExtendLeftBox;
const MessageTray      = Concord.imports.modules.messageTray.MessageTray;
const ActivitiesButton = Concord.imports.modules.activitiesButton.ActivitiesButton;
const AppMenu          = Concord.imports.modules.appMenu.AppMenu;
const WindowButtons    = Concord.imports.modules.windowButtons.WindowButtons;
const WindowDecoration = Concord.imports.modules.windowDecoration.WindowDecoration;
const TopIcons         = Concord.imports.modules.topIcons.TopIcons;

var ConcordExtension = new Lang.Class({
  Name: 'Concord',

  _init: function() {
    this._activateWindow   = new ActivateWindow();
    this._extendLeftBox    = new ExtendLeftBox();
    this._messageTray      = new MessageTray();
    this._activitiesButton = new ActivitiesButton();
    this._appMenu          = new AppMenu();
    this._windowButtons    = new WindowButtons();
    this._windowDecoration = new WindowDecoration();
    this._topIcons         = new TopIcons();

    Main.loadTheme();
  },

  destroy: function() {
    this._activateWindow.destroy();
    this._extendLeftBox.destroy();
    this._messageTray.destroy();
    this._activitiesButton.destroy();
    this._appMenu.destroy();
    this._windowButtons.destroy();
    this._windowDecoration.destroy();
    this._topIcons.destroy();

    Main.loadTheme();
  }
});

let concordExtension;

function enable() {
  concordExtension = new ConcordExtension();
};

function disable() {
  concordExtension.destroy();
  concordExtension = null;
};
