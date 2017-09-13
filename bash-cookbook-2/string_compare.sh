#!/bin/bash
S1='string'
S2='String'
if [ $S1 != $S2 ]; then
  echo "S1('$S1') is not equal S2('$S2')"
fi

if [ $S1 = $S2 ]; then
  echo "S1('$S1') is equal S2('$S2')"
fi
