'use strict';
import { info, alert, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";



export function alertNotice() {
    alert({
        title: false,
        text:
            "Image not found",
        maxTextHeight: null,
        delay: 2000,
    });
}

export function infoNotice() {
    info({
        title: false,
        text:
            "Enter you image",
        maxTextHeight: null,
        delay: 2000,
    });
}

export function errorNotice() {
    error({
        title: false,
        text:
            "404",
        maxTextHeight: null,
        delay: 2000,
    });
}