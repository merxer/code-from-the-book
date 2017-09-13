#!/bin/bash

T1="foo"
T2="bar"

if [ "$T1" = "$T2" ]; then
  echo "same string"
else
  echo "not same string"
fi
