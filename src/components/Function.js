import React, { useState } from 'react';
import Button from '@material-ui/core/Button'

export default function Function() {
  // Declare a new state variable, which we'll call "count"
    let [count, setCount] = useState(0)
    if (count < 0) {
        count = 0
    }

    return (
    <div>
        <p>You clicked {count} times</p>
        <Button 
        color="secondary" 
        variant="contained" 
        onClick={() => setCount(count - 1)}>
            -
        </Button>
        <Button 
        color="secondary" 
        variant="contained" 
        onClick={() => setCount(count + 1)}>
            +
        </Button>
        <Button 
        color="secondary" 
        variant="contained" 
        onClick={() => setCount(count = 0)}>
            Reset
        </Button>
        </div>
)
}