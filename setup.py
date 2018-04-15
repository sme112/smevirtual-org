#!/usr/bin/env python
# Copyright (C) SME Virtual Network contributors. All rights reserved.
# See LICENSE in the project root for license information.

import sys

from smevirtual import __version__
from smevirtual.utils.setup import assets, sdist, check_bdist_egg

try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup
