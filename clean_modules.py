import shutil
import os

try:
    if os.path.exists("node_modules"):
        shutil.rmtree("node_modules")
        print("Successfully removed node_modules")
    else:
        print("node_modules does not exist")
except Exception as e:
    print(f"Error removing node_modules: {e}")
