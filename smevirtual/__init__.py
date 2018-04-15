# -*- coding: utf-8 -*-
# Copyright (C) SME Virtual Network contributors. All rights reserved.
# See LICENSE in the project root for license information.

from utils.version import get_pep_version, get_semver_version

# Version format: <major number>.<minor number>.<patch number>-<release name>.<release number>
# The `release name` can be one of the following: 'alpha', 'beta', 'rc' or 'final'.
# The `release number` is not used for 'final' releases.
VERSION = (0, 1, 0, 'alpha', 0)

__version__ = get_pep_version(VERSION)

# This is required for npm.
__semver__ = get_semver_version(VERSION)
