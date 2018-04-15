# -*- coding: utf-8 -*-
# Copyright (C) SME Virtual Network contributors. All rights reserved.
# See LICENSE in the project root for license information.

"""Utilities to construct version designations."""

from typing import Tuple

def get_pep_version(version: Tuple[int, int, int, str, int]) -> str:
    """Constructs a version designation which conforms to PEP 386.

    Parameters
    ----------
    version
        Version information. The argument should be of the form
        (major number, minor number, patch number, release name, release number).
        The 'release name' can be one of: 'alpha', 'beta', 'rc' and 'final'.
        For 'final' releases, the 'release number' will be ignored.

    Returns
    -------
    str
        The version designation that conforms to PEP 386.
    """
    main = get_main_version_part(version)
    sub = ''

    if version[3] != 'final':
        mapping = {'alpha': 'a', 'beta': 'b', 'rc': 'c'}
        sub = mapping[version[3]] + str(version[4])

    return main + sub


def get_main_version_part(version: Tuple[int, int, int, str, int]) -> str:
    """Retrieves the main part of version information - the main verison
    consists of only the major, minor and patch components.

    Parameters
    ----------
    version
        Version information.

    Returns
    -------
    str
        The main version part.
    """
    parts = 2 if version[2] == 0 else 3
    return '.'.join(str(x) for x in version[:parts])


def get_semver_version(version: Tuple[int, int, int, str, int]) -> str:
    """Constructs a version designation which conforms to the Semantic Versioning
    scheme (https://semver.org/).

    Parameters
    ----------
    version
        Version information.

    Returns
    -------
    str
        The version designation that is Semantic Versioning compliant.
        The 'alpha' and 'beta' values are the only release names which are valid
        for the Semantic Versioning scheme. The 'release number' is not used
        for Semantic Versioning.
    """
    main = '.'.join(str(x) for x in version[:3])
    sub = ''

    if version[3] != 'final':
        sub = '-{}.{}'.format(*version[3:])

    return main + sub
