/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineComponent, PropType } from 'vue'
import styles from './index.module.scss'
import { NLayoutSider, NMenu } from 'naive-ui'

const Sidebar = defineComponent({
  name: 'Sidebar',
  props: {
    sideMenuOptions: {
      type: Array as PropType<any>,
      default: [],
    },
    isShowSide: {
      type: Boolean as PropType<boolean>,
      default: false,
    }
  },
  setup() {
    return {}
  },
  render() {
    if (this.isShowSide) {
      return (
        <NLayoutSider bordered nativeScrollbar={false} show-trigger='bar'>
          <NMenu options={this.sideMenuOptions} default-expand-all />
        </NLayoutSider>
      )
    } else {
      return
    }
  },
})

export default Sidebar
