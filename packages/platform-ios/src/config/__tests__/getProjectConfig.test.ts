/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as projects from '../__fixtures__/projects';

jest.mock('path');
jest.mock('fs');

const fs = require('fs');

const getProjectConfig = require('../').projectConfig;

describe('ios::getProjectConfig', () => {
  const userConfig = {};

  beforeEach(() => {
    fs.__setMockFilesystem({testDir: projects});
  });

  it('returns an object with ios project configuration', () => {
    const folder = '/testDir/nested';

    expect(getProjectConfig(folder, userConfig)).not.toBeNull();
    expect(typeof getProjectConfig(folder, userConfig)).toBe('object');
  });

  it('returns `null` if ios project was not found', () => {
    const folder = '/testDir/empty';

    expect(getProjectConfig(folder, userConfig)).toBeNull();
  });
});
