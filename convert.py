import os

def convert_to_crlf(file_path):
    try:
        with open(file_path, 'r', newline='') as file:
            content = file.read()

        with open(file_path, 'w', newline='') as file:
            # Replace LF (\n) with CRLF (\r\n)
            content = content.replace('\r\n', '\n').replace('\n', '\r\n')
            file.write(content)
        print(f"Converted {file_path} to CRLF.")
    except Exception as e:
        print(f"Failed to convert {file_path}: {e}")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            convert_to_crlf(file_path)

if __name__ == "__main__":
    directory = input("Enter the directory path: ")
    if os.path.isdir(directory):
        process_directory(directory)
    else:
        print("The provided path is not a valid directory.")
