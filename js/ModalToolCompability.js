/*
 *     Copyright (C) 2018, Dawn team<https://github.com/Dawn-Team>.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


var _modalObject = null;
var _header = null;
var _body = null;
var _footer = null;

function setSize(size) {
    switch (size) {
        case "small":
            _getModalObject().removeClass("bs-example-modal-lg");
            _getModalObject().children("div").removeClass("modal-lg");
            _getModalObject().children("div").addClass("modal-sm");
            _getModalObject().addClass("bs-example-modal-sm");
            break;
        case "large":
            _getModalObject().removeClass("bs-example-modal-sm");
            _getModalObject().children("div").removeClass("modal-sm");
            _getModalObject().children("div").addClass("modal-lg");
            _getModalObject().addClass("bs-example-modal-lg");
            break;
        default:
            console.log("WARNING: no such size");
            break;
    }
    // set content to default
    ModalTool.setHeader("Loading");
    ModalTool.setBody("Loading");
    ModalTool.setFooter(null, "hidden");

}

function setFocus(object) {
    this._getModalObject().on('shown.bs.modal', function () {
        object.focus();
    });
}

function setHeader(header, hidden) {
    if (hidden === "hidden") {
        ModalTool.getHeaderObject().attr("hidden", hidden);
    } else {
        _getModalObject().find(".modal-header").removeAttr("hidden");
    }
    _getModalObject().find(".modal-header").html(header);
}

function getHeaderObject() {
    if (_header === null || _header === undefined) {
        _header = _getModalObject().find(".modal-header");
    }
    return _header;
}

function setBody(content) {
    ModalTool.getBodyObject().find("div[purpose='placeholder']").html(content)
}

function getBodyObject() {
    if (_body === null || _body === undefined) {
        _body = this._getModalObject().find(".modal-body");
    }
    return _body;
}

function setFooter(content, hidden) {
    if (hidden === "hidden") {
        ModalTool.getFooterObject().attr("hidden", hidden)
    } else {
        ModalTool.getFooterObject().removeAttr("hidden")
    }
    ModalTool.getFooterObject().html(content)
}

function getFooterObject() {
    if (_footer === null || _footer === undefined) {
        _footer = _getModalObject().find(".modal-footer");
    }
    return _footer;
}

function _getModalObject() {
    if (this._modalObject === null || this._modalObject === undefined) {
        _modalObject = $(".modal");
    }
    return this._modalObject
}

function show(show) {
    if (show === null || show === undefined || show === 'show') {
        _getModalObject().modal('show');
    } else {
        _getModalObject().modal('hide');
    }
}

