/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Audit = require('../../../audits/manifest/background-color.js');
const assert = require('assert');

/* global describe, it*/
/* eslint-disable camelcase */
describe('manifest background color audit', () => {
  it('fails when no manifest present', () => {
    return assert.equal(Audit.audit({}).value, false);
  });

  it('fails when no background color present', () => {
    return assert.equal(Audit.audit({manifest: {
      foo: 1}}).value, false);
  });

  it('fails when no background color value present', () => {
    return assert.equal(Audit.audit({manifest: {
      background_color: 'no'}}).value, false);
  });

  it('passes when color is present', () => {
    return assert.equal(Audit.audit({manifest: {
      background_color: {value: 'black'}}}).value, true);
  });
});
/* eslint-enable */
