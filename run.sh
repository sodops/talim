#!/bin/bash

# EduSpace - Oson Run Script
# Foydalanish: ./run.sh [command]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Banner
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════╗"
echo "║         EduSpace Platform             ║"
echo "║     O'zbekiston Ta'lim Platformasi    ║"
echo "╚═══════════════════════════════════════╝"
echo -e "${NC}"

# Function to show help
show_help() {
    echo -e "${GREEN}Mavjud komandalar:${NC}"
    echo ""
    echo -e "  ${YELLOW}./run.sh dev${NC}        - Development serverini ishga tushirish"
    echo -e "  ${YELLOW}./run.sh build${NC}      - Production build yaratish"
    echo -e "  ${YELLOW}./run.sh preview${NC}    - Build preview ko'rish"
    echo -e "  ${YELLOW}./run.sh lint${NC}       - Code linting"
    echo -e "  ${YELLOW}./run.sh install${NC}    - Dependencies o'rnatish"
    echo -e "  ${YELLOW}./run.sh update${NC}     - Dependencies yangilash"
    echo -e "  ${YELLOW}./run.sh clean${NC}      - Cache va build fayllarni tozalash"
    echo -e "  ${YELLOW}./run.sh test${NC}       - Loyihani tekshirish"
    echo -e "  ${YELLOW}./run.sh help${NC}       - Bu yordamni ko'rsatish"
    echo ""
}

# Check if node_modules exists
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}⚠️  Dependencies topilmadi. O'rnatilmoqda...${NC}"
        npm install
    fi
}

# Main command handler
case "${1:-dev}" in
    dev|d)
        echo -e "${GREEN}🚀 Development server ishga tushirilmoqda...${NC}"
        check_dependencies
        npm run dev
        ;;
    
    build|b)
        echo -e "${GREEN}🔨 Production build yaratilmoqda...${NC}"
        check_dependencies
        npm run build
        echo -e "${GREEN}✅ Build tayyor! dist/ papkasida${NC}"
        ;;
    
    preview|p)
        echo -e "${GREEN}👁️  Build preview...${NC}"
        if [ ! -d "dist" ]; then
            echo -e "${YELLOW}Build topilmadi. Yaratilmoqda...${NC}"
            npm run build
        fi
        npm run preview
        ;;
    
    lint|l)
        echo -e "${GREEN}🔍 Code linting...${NC}"
        check_dependencies
        npm run lint
        ;;
    
    install|i)
        echo -e "${GREEN}📦 Dependencies o'rnatilmoqda...${NC}"
        npm install
        echo -e "${GREEN}✅ Dependencies o'rnatildi!${NC}"
        ;;
    
    update|u)
        echo -e "${GREEN}🔄 Dependencies yangilanmoqda...${NC}"
        npm update
        echo -e "${GREEN}✅ Dependencies yangilandi!${NC}"
        ;;
    
    clean|c)
        echo -e "${YELLOW}🧹 Tozalanmoqda...${NC}"
        rm -rf node_modules dist .vite
        echo -e "${GREEN}✅ Tozalandi!${NC}"
        ;;
    
    test|t)
        echo -e "${GREEN}🧪 Loyiha tekshirilmoqda...${NC}"
        check_dependencies
        echo -e "${BLUE}1. ESLint tekshiruvi...${NC}"
        npm run lint
        echo -e "${BLUE}2. Build tekshiruvi...${NC}"
        npm run build
        echo -e "${GREEN}✅ Barcha testlar o'tdi!${NC}"
        ;;
    
    help|h|--help|-h)
        show_help
        ;;
    
    *)
        echo -e "${RED}❌ Noma'lum komanda: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac
