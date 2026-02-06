
def check_balance(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()

    stack = []
    
    # We need to be careful with strings and comments, but for a rough check:
    # We will ignore mismatches inside strings/comments if we can, but simplistic check first.
    
    for i, line in enumerate(lines):
        for char in line:
            if char in '{[(':
                stack.append((char, i + 1))
            elif char in '}])':
                if not stack:
                    print(f"Error: Unmatched closing '{char}' at line {i + 1}")
                    return
                last, line_num = stack.pop()
                expected = {'{': '}', '[': ']', '(': ')'}[last]
                if char != expected:
                    print(f"Error: Mismatched closing '{char}' at line {i + 1}. Expected '{expected}' matched with '{last}' from line {line_num}")
                    return

    if stack:
        print(f"Error: Unmatched opening '{stack[-1][0]}' from line {stack[-1][1]}")
        for item in stack:
             print(f"Unclosed: {item}")
    else:
        print("Braces/Parens are balanced.")

check_balance(r"c:\Users\hp\Desktop\udpcaregrant\udpcaregrants-main\src\app\apply\page.tsx")
