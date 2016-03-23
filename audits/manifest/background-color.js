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

'use strict';

class ManifestBackgroundColor {

  static get tags() {
    return ['Manifest'];
  }

  static get description() {
    return 'Contains background_color';
  }

  static hasBackgroundColorValue(manifest) {
    /* eslint-disable camelcase */
    return Boolean(manifest !== undefined &&
                   manifest.background_color !== undefined &&
                   manifest.background_color.value !== undefined);
    /* eslint-enable */
  }

  static audit(inputs) {
    const hasBackgroundColor = ManifestBackgroundColor.hasBackgroundColorValue(inputs.manifest);

    return {
      value: hasBackgroundColor,
      tags: ManifestBackgroundColor.tags,
      description: ManifestBackgroundColor.description
    };
  }
}

module.exports = ManifestBackgroundColor;
