/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { mappings } from "@aemforms/af-react-components";
import RichText from "../components/richtext";
import Slider from "../components/slider";
import MaterialtextField from "../components/materialtextfield";
import MaterialsliderField from "../components/materialslider";
import MaterialtextFieldmultiline from "../components/materialtextfieldmultiline";
import MaterialtabsField from "../components/materialtabs";


const customMappings: any = {
  ...mappings,
  "number-input": MaterialsliderField,
  "slider": Slider,
  "rich-text": RichText,
  "text-input": MaterialtextField,
  "multiline-input": MaterialtextFieldmultiline,
  "forms-components-examples/components/form/tabsontop": MaterialtabsField

};

export default customMappings;