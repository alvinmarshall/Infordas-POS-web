// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "reactstrap";
const SpinnerView = ({ className, color, size, width, height, type }) => {
  return (
    <div className="mx-auto">
      <Spinner
        className={className}
        color={color}
        size={size}
        type={type}
        style={{ width, height }}
      />
    </div>
  );
};

SpinnerView.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
};

SpinnerView.defaultProps = {
  color: "dark",
  type: "grow", //or border
  width: "3rem",
  height: "3rem"
};

export default SpinnerView;
