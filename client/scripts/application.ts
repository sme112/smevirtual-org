/*------------------------------------------------------------------------------
 *  Copyright (C) SME Virtual Network contributors. All rights reserved.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import { Application } from "stimulus";
import "./../stylesheets/smevirtual.scss";

const application = Application.start();
const stimulusWebpackHelpers = require("stimulus/webpack-helpers");
const context = require.context("./controllers", true, /\.ts$/);

application.load(stimulusWebpackHelpers.definitionsFromContext(context));

console.log("Loaded!");
