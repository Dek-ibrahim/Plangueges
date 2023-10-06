def encrypt(message, shift):
    encrypted_message = ""
    for char in message:
        if char.isalpha():
            if char.islower():
                encrypted_char = chr(((ord(char) - ord('a') + shift) % 26) + ord('a'))
            else:
                encrypted_char = chr(((ord(char) - ord('A') + shift) % 26) + ord('A'))
            encrypted_message += encrypted_char
        else:
            encrypted_message += char
    return encrypted_message

def decrypt(encrypted_message, shift):
    decrypted_message = ""
    for char in encrypted_message:
        if char.isalpha():
            if char.islower():
                decrypted_char = chr(((ord(char) - ord('a') - shift) % 26) + ord('a'))
            else:
                decrypted_char = chr(((ord(char) - ord('A') - shift) % 26) + ord('A'))
            decrypted_message += decrypted_char
        else:
            decrypted_message += char
    return decrypted_message

# Your message to be encrypted
message = "I love my best friend!"

# Choose a shift value for the Caesar cipher
shift = 3

# Encrypt the message
encrypted_message = encrypt(message, shift)
print("Encrypted Message:", encrypted_message)

# Decrypt the message
decrypted_message = decrypt(encrypted_message, shift)
print("Decrypted Message:", decrypted_message)
